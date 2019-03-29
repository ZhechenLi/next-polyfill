

## Usage

```js
let exportAll = requrie('export-all');

const options = {
    // a.js will be exclude when parsing
    exclude: ['a.js']
}

exportAll('path/to/export', options);
```

## options

options.exclude 

Array<string>

contain the file.name you don’t want to parsing.

