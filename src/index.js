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
    blocks: [ 'text-basic', 'quote'],

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
                    { name: 'Roboto', value: 'Roboto, sans-serif'},
                    { name: 'Zilla Slab Highlight', value: 'Zilla Slab Highlight, cursive'},
                    { name: 'Open Sans', value: 'Open Sans, sans-serif'},
                    { name: 'Spectral', value: 'Spectral, serif'},
                    { name: 'Slabo 27px', value: 'Slabo 27px, serif'},
                    { name: 'Lato', value: 'Lato, sans-serif'},
                    { name: 'Roboto Condensed', value: 'Roboto Condensed, sans-serif'},
                    { name: 'Oswald', value: 'Oswald, sans-serif'},
                    { name: 'Source Sans Pro', value: 'Source Sans Pro, sans-serif'},
                    { name: 'Raleway', value: 'Raleway, sans-serif'},
                    { name: 'Zilla Slab', value: 'Zilla Slab, serif'},
                    { name: 'Montserrat', value: 'Montserrat, sans-serif'},
                    { name: 'PT Sans', value: 'PT Sans, sans-serif'},
                    { name: 'Roboto Slab', value: 'Roboto Slab, serif'},
                    { name: 'Merriweather', value: 'Merriweather, serif'},
                    { name: 'Saira Condensed', value: 'Saira Condensed, sans-serif'},
                    { name: 'Saira', value: 'Saira, sans-serif'},
                    { name: 'Open Sans Condensed', value: 'Open Sans Condensed, sans-serif'},
                    { name: 'Saira Semi Condensed', value: 'Saira Semi Condensed, sans-serif'},
                    { name: 'Saira Extra Condensed', value: 'Saira Extra Condensed, sans-serif'},
                    { name: 'Julee', value: 'Julee, cursive'},
                    { name: 'Archivo', value: 'Archivo, sans-serif'},
                    { name: 'Ubuntu', value: 'Ubuntu, sans-serif'},
                    { name: 'Lora', value: 'Lora, serif'},
                    { name: 'Manuale', value: 'Manuale, serif'},
                    { name: 'Asap Condensed', value: 'Asap Condensed, sans-serif'},
                    { name: 'Faustina', value: 'Faustina, serif'},
                    { name: 'Cairo', value: 'Cairo, sans-serif'},
                    { name: 'Playfair Display', value: 'Playfair Display, serif'},
                    { name: 'Droid Serif', value: 'Droid Serif, serif'},
                    { name: 'Noto Sans', value: 'Noto Sans, sans-serif'},
                    { name: 'PT Serif', value: 'PT Serif, serif'},
                    { name: 'Droid Sans', value: 'Droid Sans, sans-serif'},
                    { name: 'Arimo', value: 'Arimo, sans-serif'},
                    { name: 'Poppins', value: 'Poppins, sans-serif'},
                    { name: 'Sedgwick Ave Display', value: 'Sedgwick Ave Display, cursive'},
                    { name: 'Titillium Web', value: 'Titillium Web, sans-serif'},
                    { name: 'Muli', value: 'Muli, sans-serif'},
                    { name: 'Sedgwick Ave', value: 'Sedgwick Ave, cursive'},
                    { name: 'Indie Flower', value: 'Indie Flower, cursive'},
                    { name: 'Mada', value: 'Mada, sans-serif'},
                    { name: 'PT Sans Narrow', value: 'PT Sans Narrow, sans-serif'},
                    { name: 'Noto Serif', value: 'Noto Serif, serif'},
                    { name: 'Bitter', value: 'Bitter, serif'},
                    { name: 'Dosis', value: 'Dosis, sans-serif'},
                    { name: 'Josefin Sans', value: 'Josefin Sans, sans-serif'},
                    { name: 'Inconsolata', value: 'Inconsolata, monospace'},
                    { name: 'Bowlby One SC', value: 'Bowlby One SC, cursive'},
                    { name: 'Oxygen', value: 'Oxygen, sans-serif'},
                    { name: 'Arvo', value: 'Arvo, serif'},
                    { name: 'Hind', value: 'Hind, sans-serif'},
                    { name: 'Cabin', value: 'Cabin, sans-serif'},
                    { name: 'Fjalla One', value: 'Fjalla One, sans-serif'},
                    { name: 'Anton', value: 'Anton, sans-serif'},
                    { name: 'Cairo', value: 'Cairo, sans-serif'},
                    { name: 'Playfair Display', value: 'Playfair Display, serif'},
                    { name: 'Droid Serif', value: 'Droid Serif, serif'},
                    { name: 'Noto Sans', value: 'Noto Sans, sans-serif'},
                    { name: 'PT Serif', value: 'PT Serif, serif'},
                    { name: 'Droid Sans', value: 'Droid Sans, sans-serif'},
                    { name: 'Arimo', value: 'Arimo, sans-serif'},
                    { name: 'Poppins', value: 'Poppins, sans-serif'},
                    { name: 'Sedgwick Ave Display', value: 'Sedgwick Ave Display, cursive'},
                    { name: 'Titillium Web', value: 'Titillium Web, sans-serif'},
                    { name: 'Muli', value: 'Muli, sans-serif'},
                    { name: 'Sedgwick Ave', value: 'Sedgwick Ave, cursive'},
                    { name: 'Indie Flower', value: 'Indie Flower, cursive'},
                    { name: 'Mada', value: 'Mada, sans-serif'},
                    { name: 'PT Sans Narrow', value: 'PT Sans Narrow, sans-serif'},
                    { name: 'Noto Serif', value: 'Noto Serif, serif'},
                    { name: 'Bitter', value: 'Bitter, serif'},
                    { name: 'Dosis', value: 'Dosis, sans-serif'},
                    { name: 'Josefin Sans', value: 'Josefin Sans, sans-serif'},
                    { name: 'Inconsolata', value: 'Inconsolata, monospace'},
                    { name: 'Bowlby One SC', value: 'Bowlby One SC, cursive'},
                    { name: 'Oxygen', value: 'Oxygen, sans-serif'},
                    { name: 'Arvo', value: 'Arvo, serif'},
                    { name: 'Hind', value: 'Hind, sans-serif'},
                    { name: 'Cabin', value: 'Cabin, sans-serif'},
                    { name: 'Fjalla One', value: 'Fjalla One, sans-serif'},
                    { name: 'Anton', value: 'Anton, sans-serif'},
                    { name: 'Acme', value: 'Acme, sans-serif'},
                    { name: 'Archivo Narrow', value: 'Archivo Narrow, sans-serif'},
                    { name: 'Mukta Vaani', value: 'Mukta Vaani, sans-serif'},
                    { name: 'Play', value: 'Play, sans-serif'},
                    { name: 'Cuprum', value: 'Cuprum, sans-serif'},
                    { name: 'Maven Pro', value: 'Maven Pro, sans-serif'},
                    { name: 'EB Garamond', value: 'EB Garamond, serif'},
                    { name: 'Passion One', value: 'Passion One, cursive'},
                    { name: 'Ropa Sans', value: 'Ropa Sans, sans-serif'},
                    { name: 'Francois One', value: 'Francois One, sans-serif'},
                    { name: 'Archivo Black', value: 'Archivo Black, sans-serif'},
                    { name: 'Pathway Gothic One', value: 'Pathway Gothic One, sans-serif'},
                    { name: 'Exo', value: 'Exo, sans-serif'},
                    { name: 'Vollkorn', value: 'Vollkorn, serif'},
                    { name: 'Libre Franklin', value: 'Libre Franklin, sans-serif'},
                    { name: 'Crete Round', value: 'Crete Round, serif'},
                    { name: 'Alegreya', value: 'Alegreya, serif'},
                    { name: 'PT Sans Caption', value: 'PT Sans Caption, sans-serif'},
                    { name: 'Alegreya Sans', value: 'Alegreya Sans, sans-serif'},
                    { name: 'Source Code Pro', value: 'Source Code Pro, monospace'},
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
