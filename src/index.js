import grapesjs from 'grapesjs';
import commands from './commands';
import blocks from './blocks';
import loadComponents from './components';

export default grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
  let config = opts;

  let defaults = {
    // Modal import title
    modalImportTitle: 'Import',

    // Modal import button text
    modalImportButton: 'Import',

    // Import description inside import modal
    modalImportLabel: '',

    // Default content to setup on import model open.
    // Could also be a function with a dynamic content return (must be a string)
    // eg. modalImportContent: editor => editor.getHtml(),
    modalImportContent: '',

    // Code viewer (eg. CodeMirror) options
    importViewerOptions: {},

    // Confirm text before cleaning the canvas
    textCleanCanvas: 'Are you sure to clean the canvas?',

    // `grapesjs-blocks-basic` plugin options
    // By setting this option to `false` will avoid loading the plugin
    blocksBasicOpts: {},

    // `grapesjs-navbar` plugin options
    // By setting this option to `false` will avoid loading the plugin
    navbarOpts: {},

    // `grapesjs-component-countdown` plugin options
    // By setting this option to `false` will avoid loading the plugin
    countdownOpts: {},
  };

  /*
  plugins: [
          'gjs-plugin-export', 'gjs-plugin-filestack',
          'gjs-aviary',  'gjs-preset-webpage',
          'gjs-component-countdown', 'gjs-plugin-forms'
        ],
   */

  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }

  // Add components
  loadComponents(editor, config);

  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
});
