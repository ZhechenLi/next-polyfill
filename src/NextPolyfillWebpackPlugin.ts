import { URL, URLSearchParams } from 'url';
import { parseJS, parse } from './index';
// var HtmlWebpackPlugin = require('html-webpack-plugin');
import getFeatureMap from './util/generateFeatureMap';
import cheerio from 'cheerio';

const featureMap = getFeatureMap();

type Opt = {
  url: string;
  params: {
    feature: Array<string>;
    unknown: string;
    flags: string;
  };
  debug: boolean;
};

class NextPolyfillWebpackPlugin {
  opt: Opt = {
    url: 'https://polyfill.io/v3/polyfill.min.js',
    params: {
      feature: ['default'],
      unknown: 'polyfill',
      flags: 'gated'
    },
    debug: false
  };

  builtins = [];

  constructor(opt) {
    const { url = 'https://polyfill.io/v3/polyfill.min.js', params = {} } = opt;

    this.opt.url = url;
    Object.assign(this.opt.params, params);
  }

  getPolyfillUrl() {
    const { url = 'https://polyfill.io/v3/polyfill.min.js', params } = this.opt;
    this.opt.debug && console.log(this.opt);
    const polyfillUrl = new URL(url);

    polyfillUrl.search = new URLSearchParams({
      ...params,
      feature: [...params.feature, ...this.builtins]
    }).toString();

    return polyfillUrl.toString();
  }

  emitHtml(data) {
    // TODO: next version
    // data.assetTags.scripts.push({
    //   tagName: 'script',
    //   voidTag: false,
    //   attributes: {
    //     src: 'aaaaa.js'
    //   }
    // });

    data.body.push({
      tagName: 'script',
      voidTag: false,
      attributes: {
        src: this.getPolyfillUrl()
      }
    });
  }

  apply(compiler) {
    // stable version of html plugin, the format of @next version plugin would be different....
    compiler.hooks.compilation.tap('NextPolyfillWebpackPlugin', compilation => {
      const cb = (data, cb) => {
        // emitHtml(data)
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

    // WARN:using eval-source-map would cause fail while paring feature, doesn't matter on production
    compiler.hooks.emit.tapAsync('HookChecker', (data, cb) => {
      Object.entries(data.assets)
        .filter(e => e[0].match(/.js$/))
        .forEach(e => {
          // @ts-ignore
          let code = e[1].source();

          parse(code.toString()).then(feature => {
            this.builtins = [...feature];
            this.opt.debug && console.log('this.builtins', this.builtins);
            Object.entries(data.assets)
              .filter(e => e[0].match(/.html$/))
              .forEach(e => {
                // @ts-ignore
                let htmlCode = e[1].source();
                this.opt.debug && console.log(e);

                let $ = cheerio.load(htmlCode);
                $('body').prepend(
                  `<script src="${this.getPolyfillUrl()}"></script>`
                );

                // @ts-ignore
                e[1].source = () => $.html();
                // @ts-ignore
                e[1]._value = $.html();
              });

            cb();
          });
        });
    });
  }
}

export default NextPolyfillWebpackPlugin;
