# GrapesJS Preset Webpage

[Demo](http://grapesjs.com/demo.html)

## Summary

* Plugin name: **`grapesjs-preset-webpage`**
* Commands:
  * `gjs-open-import-webpage` Opens a modal for the import
  * `set-device-desktop` Set desktop device
  * `set-device-tablet` Setup tablet device
  * `set-device-mobile` Setup mobile device
  * `canvas-clear` Clear all components and styles inside canvas
* Blocks:
  * `link-block`
  * `quote`
  * `text-basic`

## Options

| Option | Description | Default |
| - | - | - |
| `blocks` | Which blocks to add | `['link-block', 'quote', 'text-basic']` |
|`block`| Add custom block options, based on block id|`(blockId) => ({})`|
| `modalImportTitle` | Modal import title | `'Import'` |
| `modalImportButton` | Modal import button text | `'Import'` |
| `modalImportLabel` | Import description inside import modal | `''` |
| `modalImportContent` | Default content to setup on import model open. Could also be a function with a dynamic content return (must be a string) eg. `modalImportContent: editor => editor.getHtml()` | `''` |
| `importViewerOptions` | Code viewer (eg. CodeMirror) options | `{}` |
| `textCleanCanvas` | Confirm text before cleaning the canvas | `'Are you sure to clean the canvas?'` |
| `showStylesOnChange` | Show the Style Manager on component change | `true` |

## Download

* CDN
  * `https://unpkg.com/grapesjs-preset-webpage`
* NPM
  * `npm i grapesjs-preset-webpage`
* GIT
  * `git clone https://github.com/artf/grapesjs-preset-webpage.git`

## Usage

Directly in the browser
```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<link href="path/to/grapesjs-preset-webpage.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-preset-webpage.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-preset-webpage'],
      pluginsOpts: {
        'grapesjs-preset-webpage': {
          // options
        }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-preset-webpage.git
$ cd grapesjs-blocks-basic
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```

## License

BSD 3-Clause
