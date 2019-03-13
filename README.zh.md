Next Polyfill

===================

Next Polyfill 提供了一个体积更小,更灵活的 web 端 polyfill 方案

## 安装
```sh
npm i next-polyfill
```

## 使用
```javascript
import {parse} from 'next-polyfill';

const code = `
    Object.entries({a: 1})
`;

parse(code, {}, (err, result)=>{
    if(err) throw err;

    console.log(result) 
    // Set {
    //    'es7.object.entries',
    //    'es6.array.iterator',
    //    'web.dom.iterable' 
    //}

});

```
可以在 result 内取到当前代码所使用的 JavaScript 语法特性

在 Webpack 中使用

定义 webpack.config.js
```js
let 
module.exports = {
    plugins: [
        // ...
        new NextPolyfillWebpackPlugin()
        // ...
    ]
}
```

`NextPolyfillWebpackPlugin` 会自动在输出的 html 模板处添加 script 标签,输出如下
```html
<script src="https://polyfill.io/v3/polyfill.min.js?feature=default%2CObject.defineProperty%2CSymbol%2CSymbol%2CObject.create%2CFunction.prototype.bind%2CString.prototype.includes%2CArray.prototype.includes&amp;unknown=polyfill&amp;flags=gated"></script>
```

可以看到在 chrome 72 下 polyfill 体积仅为 496b，几乎只包含请求头的大小

![image-20190313224109953](assets/image-20190313224109953.png)

![image-20190313223935661](assets/image-20190313223935661.png)

可以看到在 chrome 72 下 polyfill 体积仅为 496b，几乎只包含请求头的大小

接着让我们把 UA 设置成 IE9

![image-20190313224322205](assets/image-20190313224322205.png)

![image-20190313224309694](assets/image-20190313224309694.png)

可以看到在只有一行代码的情况下 polyfill 的体积依然达到了2.7 k

优化的效果相当明显，而且这一切只需要你增加一个 webpack plugin，剩下的 Next polyfill 会帮你处理





