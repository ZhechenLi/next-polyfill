import { URL, URLSearchParams } from 'url';
import { parse } from './index';
// var HtmlWebpackPlugin = require('html-webpack-plugin');
import getFeatureMap from './generateFeatureList';
import cheerio from 'cheerio';

const featureMap = getFeatureMap();

type Opt = {
  url: string;
  params: {
    feature: Array<string>;
    unknown: string;
    flags: string;
  };
};

class NextPolyfillWebpackPlugin {
  opt: Opt = {
    url: 'https://polyfill.io/v3/polyfill.min.js',
    params: {
      feature: ['default'],
      unknown: 'polyfill',
      flags: 'gated'
    }
  };

  builtins = [];

  constructor(opt) {}

  getPolyfillUrl() {
    const { url, params } = this.opt;

    const polyfillUrl = new URL(url);

    polyfillUrl.search = new URLSearchParams({
      ...params,
      feature: [...params.feature, ...this.builtins]
    }).toString();

    return polyfillUrl.toString();
  }

  apply(compiler) {
    // 这是 stable 版的 html plugin, @next 版的 plugin 格式会不一样....
    compiler.hooks.compilation.tap('NextPolyfillWebpackPlugin', compilation => {
      const cb = (data, cb) => {
        // TODO: next version
        // data.assetTags.scripts.push({
        //   tagName: 'script',
        //   voidTag: false,
        //   attributes: {
        //     src: 'aaaaa.js'
        //   }
        // });

        // console.log(`myURL.toString()`, myURL.toString(), [
        //   ...params.feature,
        //   ...this.builtins
        // ]);

        // TODO: 先在 emit 修改模板
        // data.body.push({
        //   tagName: 'script',
        //   voidTag: false,
        //   attributes: {
        //     src: this.getPolyfillUrl()
        //   }
        // });

        cb(null, data);
      };
      const IS_HTML_WEBPACK_PLUGIN_SUPPORT = !!compilation.hooks
        .htmlWebpackPluginAlterAssetTags;

      if (!IS_HTML_WEBPACK_PLUGIN_SUPPORT) {
        throw new Error('Cannot archive html webpack plugin');
      }
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
        'NextPolyfillWebpackPlugin',
        cb
      );
      // TODO: next version html plugin hooks
      // HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tap
    });

    // 如果 asset 使用 eval-source-map 可能会导致 feature 检测异常, 生产环境不影响
    compiler.hooks.emit.tapAsync('HookChecker', (data, cb) => {
      Object.entries(data.assets)
        .filter(e => e[0].match(/.js$/))
        .forEach(e => {
          // @ts-ignore
          let code = e[1].source();

          parse(code.toString(), {}, (error, result) => {
            if (error) throw error;
            this.builtins = [...result].map(e => featureMap.get(e));
            console.log(this.builtins);
            Object.entries(data.assets)
              .filter(e => e[0].match(/.html$/))
              .forEach(e => {
                // @ts-ignore
                let htmlCode = e[1].source();
                console.log(e);

                let $ = cheerio.load(htmlCode);
                $('body').prepend(
                  `<script src="${this.getPolyfillUrl()}"></script>`
                );
                console.log($.html());

                // @ts-ignore
                e[1].source = () => $.html();
              });

            cb();
          });
        });
    });
  }
}

export default NextPolyfillWebpackPlugin;
