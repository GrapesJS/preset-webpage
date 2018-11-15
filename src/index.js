import grapesjs from 'grapesjs';
import pluginBlocks from 'grapesjs-blocks-basic';
import pluginAviary from 'grapesjs-aviary';
import pluginFilestack from 'grapesjs-plugin-filestack';

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';

export default grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
  let config = opts;

  let defaults = {
    // Which blocks to add
    blocks: [ 'text-basic', 'quote', 'link-block'],

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

    // Modal edit title
    modalEditTitle: 'Edit',

    // Modal edit button text
    modalEditButton: 'Save',

    modalEditLabel: 'Edit here HTML/CSS code and click Save',

    modalEditContent: editor => editor.getHtml(),

    editViewerOptions: {},

    // Confirm text before cleaning the canvas
    textCleanCanvas: 'Are you sure to clean the canvas?',

    // Show the Style Manager on component change
    showStylesOnChange: 1,

    // Text for General sector in Style Manager
    textGeneral: 'General',

    // Text for Layout sector in Style Manager
    textLayout: 'Layout',

    // Text for Typography sector in Style Manager
    textTypography: 'Font Options',

    // Text for Decorations sector in Style Manager
    textDecorations: 'Block',

    // Text for Extra sector in Style Manager
    textExtra: 'Extra',

      canvas: {
          styles: [
              '<link href="https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Acme|Alegreya|Alegreya+Sans|Anton|Archivo|Archivo+Black|Archivo+Narrow|Arimo|Arvo|Asap|Asap+Condensed|Bitter|Bowlby+One+SC|Bree+Serif|Cabin|Cairo|Catamaran|Crete+Round|Crimson+Text|Cuprum|Dancing+Script|Dosis|Droid+Sans|Droid+Serif|EB+Garamond|Exo|Exo+2|Faustina|Fira+Sans|Fjalla+One|Francois+One|Gloria+Hallelujah|Hind|Inconsolata|Indie+Flower|Josefin+Sans|Julee|Karla|Lato|Libre+Baskerville|Libre+Franklin|Lobster|Lora|Mada|Manuale|Maven+Pro|Merriweather|Merriweather+Sans|Montserrat|Montserrat+Subrayada|Mukta+Vaani|Muli|Noto+Sans|Noto+Serif|Nunito|Open+Sans|Open+Sans+Condensed:300|Oswald|Oxygen|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|Pacifico|Passion+One|Pathway+Gothic+One|Play|Playfair+Display|Poppins|Questrial|Quicksand|Raleway|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Ropa+Sans|Rubik|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Sedgwick+Ave|Sedgwick+Ave+Display|Shadows+Into+Light|Signika|Slabo+27px|Source+Code+Pro|Source+Sans+Pro|Spectral|Titillium+Web|Ubuntu|Ubuntu+Condensed|Varela+Round|Vollkorn|Work+Sans|Yanone+Kaffeesatz|Zilla+Slab|Zilla+Slab+Highlight" rel="stylesheet">',
          ],
      },

    // Use custom set of sectors for the Style Manager
    customStyleManager: [{
        name: 'Font / Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
        properties:[
            { name: 'Font', property: 'font-family',
                defaults: 'Roboto',
                list: [
                    { value: 'Roboto'},
                    { value: 'Zilla Slab Highlight'},
                    { value: 'Open Sans'},
                    { value: 'Spectral'},
                    { value: 'Slabo 27px'},
                    { value: 'Lato'},
                    { value: 'Roboto Condensed'},
                    { value: 'Oswald'},
                    { value: 'Source Sans Pro'},
                    { value: 'Raleway'},
                    { value: 'Zilla Slab'},
                    { value: 'Montserrat'},
                    { value: 'PT Sans'},
                    { value: 'Roboto Slab'},
                    { value: 'Merriweather'},
                    { value: 'Saira Condensed'},
                    { value: 'Saira'},
                    { value: 'Open Sans Condensed'},
                    { value: 'Saira Semi Condensed'},
                    { value: 'Saira Extra Condensed'},
                    { value: 'Julee'},
                    { value: 'Archivo'},
                    { value: 'Ubuntu'},
                    { value: 'Lora'},
                    { value: 'Manuale'},
                    { value: 'Asap Condensed'},
                    { value: 'Faustina'},
                    { value: 'Cairo'},
                    { value: 'Playfair Display'},
                    { value: 'Droid Serif'},
                    { value: 'Noto Sans'},
                    { value: 'PT Serif'},
                    { value: 'Droid Sans'},
                    { value: 'Arimo'},
                    { value: 'Poppins'},
                    { value: 'Sedgwick Ave Display'},
                    { value: 'Titillium Web'},
                    { value: 'Muli'},
                    { value: 'Sedgwick Ave'},
                    { value: 'Indie Flower'},
                    { value: 'Mada'},
                    { value: 'PT Sans Narrow'},
                    { value: 'Noto Serif'},
                    { value: 'Bitter'},
                    { value: 'Dosis'},
                    { value: 'Josefin Sans'},
                    { value: 'Inconsolata'},
                    { value: 'Bowlby One SC'},
                    { value: 'Oxygen'},
                    { value: 'Arvo'},
                    { value: 'Hind'},
                    { value: 'Cabin'},
                    { value: 'Fjalla One'},
                    { value: 'Anton'},
                    { value: 'Cairo'},
                    { value: 'Playfair Display'},
                    { value: 'Droid Serif'},
                    { value: 'Noto Sans'},
                    { value: 'PT Serif'},
                    { value: 'Droid Sans'},
                    { value: 'Arimo'},
                    { value: 'Poppins'},
                    { value: 'Sedgwick Ave Display'},
                    { value: 'Titillium Web'},
                    { value: 'Muli'},
                    { value: 'Sedgwick Ave'},
                    { value: 'Indie Flower'},
                    { value: 'Mada'},
                    { value: 'PT Sans Narrow'},
                    { value: 'Noto Serif'},
                    { value: 'Bitter'},
                    { value: 'Dosis'},
                    { value: 'Josefin Sans'},
                    { value: 'Inconsolata'},
                    { value: 'Bowlby One SC'},
                    { value: 'Oxygen'},
                    { value: 'Arvo'},
                    { value: 'Hind'},
                    { value: 'Cabin'},
                    { value: 'Fjalla One'},
                    { value: 'Anton'},
                    { value: 'Acme'},
                    { value: 'Archivo Narrow'},
                    { value: 'Mukta Vaani'},
                    { value: 'Play'},
                    { value: 'Cuprum'},
                    { value: 'Maven Pro'},
                    { value: 'EB Garamond'},
                    { value: 'Passion One'},
                    { value: 'Ropa Sans'},
                    { value: 'Francois One'},
                    { value: 'Archivo Black'},
                    { value: 'Pathway Gothic One'},
                    { value: 'Exo'},
                    { value: 'Vollkorn'},
                    { value: 'Libre Franklin'},
                    { value: 'Crete Round'},
                    { value: 'Alegreya'},
                    { value: 'PT Sans Caption'},
                    { value: 'Alegreya Sans'},
                    { value: 'Source Code Pro'},
                ],},
            { name: 'Weight', property: 'font-weight'},
            { name: 'Font color', property: 'color'},
            {
                property: 'text-align',
                type: 'radio',
                defaults: 'left',
                list: [
                    { value: 'left', name: 'Left', className: 'fa fa-align-left'},
                    { value: 'center', name: 'Center', className: 'fa fa-align-center' },
                    { value: 'right', name: 'Right', className: 'fa fa-align-right'},
                    { value: 'justify', name: 'Justify', className: 'fa fa-align-justify'}
                ],
            }],
    },{
        name: 'Block / Element',
        open: false,
        buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'background'],
    },{
        name: 'Size',
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
    }],

    // `grapesjs-blocks-basic` plugin options
    // By setting this option to `false` will avoid loading the plugin
    blocksBasicOpts: {
        blocks: ['text', 'image', 'link', 'column1', 'column2', 'column3', 'column3-7'],
    },

    // `grapesjs-navbar` plugin options
    // By setting this option to `false` will avoid loading the plugin
    navbarOpts: {},

    // `grapesjs-component-countdown` plugin options
    // By setting this option to `false` will avoid loading the plugin
    countdownOpts: {},

    // `grapesjs-plugin-forms` plugin options
    // By setting this option to `false` will avoid loading the plugin
    formsOpts: {},

    // `grapesjs-plugin-export` plugin options
    // By setting this option to `false` will avoid loading the plugin
    exportOpts: {},

    // `grapesjs-aviary` plugin options, disabled by default
    // Aviary library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    aviaryOpts: 0,

    // `grapesjs-plugin-filestack` plugin options, disabled by default
    // Filestack library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    filestackOpts: 0,
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }

  const {
    blocksBasicOpts,
    aviaryOpts,
    filestackOpts
  } = config;

  // Load plugins
  blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
  aviaryOpts && pluginAviary(editor, aviaryOpts);
  filestackOpts && pluginFilestack(editor, filestackOpts);

  // Load components
  components(editor, config);

  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // Load panels
  panels(editor, config);

  // Load styles
  styles(editor, config);

});
