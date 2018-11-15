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
                    { name: 'Roboto', value: 'Roboto'},
                    { name: 'Zilla Slab Highlight', value: 'Zilla+Slab+Highlight'},
                    { name: 'Open Sans', value: 'Open+Sans'},
                    { name: 'Spectral', value: 'Spectral'},
                    { name: 'Slabo 27px', value: 'Slabo+27px'},
                    { name: 'Lato', value: 'Lato'},
                    { name: 'Roboto Condensed', value: 'Roboto+Condensed'},
                    { name: 'Oswald', value: 'Oswald'},
                    { name: 'Source Sans Pro', value: 'Source+Sans+Pro'},
                    { name: 'Raleway', value: 'Raleway'},
                    { name: 'Zilla Slab', value: 'Zilla+Slab'},
                    { name: 'Montserrat', value: 'Montserrat'},
                    { name: 'PT Sans', value: 'PT+Sans'},
                    { name: 'Roboto Slab', value: 'Roboto+Slab'},
                    { name: 'Merriweather', value: 'Merriweather'},
                    { name: 'Saira Condensed', value: 'Saira+Condensed'},
                    { name: 'Saira', value: 'Saira'},
                    { name: 'Open Sans Condensed', value: 'Open+Sans+Condensed'},
                    { name: 'Saira Semi Condensed', value: 'Saira+Semi+Condensed'},
                    { name: 'Saira Extra Condensed', value: 'Saira+Extra+Condensed'},
                    { name: 'Julee', value: 'Julee'},
                    { name: 'Archivo', value: 'Archivo'},
                    { name: 'Ubuntu', value: 'Ubuntu'},
                    { name: 'Lora', value: 'Lora'},
                    { name: 'Manuale', value: 'Manuale'},
                    { name: 'Asap Condensed', value: 'Asap+Condensed'},
                    { name: 'Faustina', value: 'Faustina'},
                    { name: 'Cairo', value: 'Cairo'},
                    { name: 'Playfair Display', value: 'Playfair+Display'},
                    { name: 'Droid Serif', value: 'Droid+Serif'},
                    { name: 'Noto Sans', value: 'Noto+Sans'},
                    { name: 'PT Serif', value: 'PT+Serif'},
                    { name: 'Droid Sans', value: 'Droid+Sans'},
                    { name: 'Arimo', value: 'Arimo'},
                    { name: 'Poppins', value: 'Poppins'},
                    { name: 'Sedgwick Ave Display', value: 'Sedgwick+Ave+Display'},
                    { name: 'Titillium Web', value: 'Titillium+Web'},
                    { name: 'Muli', value: 'Muli'},
                    { name: 'Sedgwick Ave', value: 'Sedgwick+Ave'},
                    { name: 'Indie Flower', value: 'Indie+Flower'},
                    { name: 'Mada', value: 'Mada'},
                    { name: 'PT Sans Narrow', value: 'PT+Sans+Narrow'},
                    { name: 'Noto Serif', value: 'Noto+Serif'},
                    { name: 'Bitter', value: 'Bitter'},
                    { name: 'Dosis', value: 'Dosis'},
                    { name: 'Josefin Sans', value: 'Josefin+Sans'},
                    { name: 'Inconsolata', value: 'Inconsolata'},
                    { name: 'Bowlby One SC', value: 'Bowlby+One+SC'},
                    { name: 'Oxygen', value: 'Oxygen'},
                    { name: 'Arvo', value: 'Arvo'},
                    { name: 'Hind', value: 'Hind'},
                    { name: 'Cabin', value: 'Cabin'},
                    { name: 'Fjalla One', value: 'Fjalla+One'},
                    { name: 'Anton', value: 'Anton'},
                    { name: 'Cairo', value: 'Cairo'},
                    { name: 'Playfair Display', value: 'Playfair+Display'},
                    { name: 'Droid Serif', value: 'Droid+Serif'},
                    { name: 'Noto Sans', value: 'Noto+Sans'},
                    { name: 'PT Serif', value: 'PT+Serif'},
                    { name: 'Droid Sans', value: 'Droid+Sans'},
                    { name: 'Arimo', value: 'Arimo'},
                    { name: 'Poppins', value: 'Poppins'},
                    { name: 'Sedgwick Ave Display', value: 'Sedgwick+Ave+Display'},
                    { name: 'Titillium Web', value: 'Titillium+Web'},
                    { name: 'Muli', value: 'Muli'},
                    { name: 'Sedgwick Ave', value: 'Sedgwick+Ave'},
                    { name: 'Indie Flower', value: 'Indie+Flower'},
                    { name: 'Mada', value: 'Mada'},
                    { name: 'PT Sans Narrow', value: 'PT+Sans+Narrow'},
                    { name: 'Noto Serif', value: 'Noto+Serif'},
                    { name: 'Bitter', value: 'Bitter'},
                    { name: 'Dosis', value: 'Dosis'},
                    { name: 'Josefin Sans', value: 'Josefin+Sans'},
                    { name: 'Inconsolata', value: 'Inconsolata'},
                    { name: 'Bowlby One SC', value: 'Bowlby+One+SC'},
                    { name: 'Oxygen', value: 'Oxygen'},
                    { name: 'Arvo', value: 'Arvo'},
                    { name: 'Hind', value: 'Hind'},
                    { name: 'Cabin', value: 'Cabin'},
                    { name: 'Fjalla One', value: 'Fjalla+One'},
                    { name: 'Anton', value: 'Anton'},
                    { name: 'Acme', value: 'Acme'},
                    { name: 'Archivo Narrow', value: 'Archivo+Narrow'},
                    { name: 'Mukta Vaani', value: 'Mukta+Vaani'},
                    { name: 'Play', value: 'Play'},
                    { name: 'Cuprum', value: 'Cuprum'},
                    { name: 'Maven Pro', value: 'Maven+Pro'},
                    { name: 'EB Garamond', value: 'EB+Garamond'},
                    { name: 'Passion One', value: 'Passion+One'},
                    { name: 'Ropa Sans', value: 'Ropa+Sans'},
                    { name: 'Francois One', value: 'Francois+One'},
                    { name: 'Archivo Black', value: 'Archivo+Black'},
                    { name: 'Pathway Gothic One', value: 'Pathway+Gothic+One'},
                    { name: 'Exo', value: 'Exo'},
                    { name: 'Vollkorn', value: 'Vollkorn'},
                    { name: 'Libre Franklin', value: 'Libre+Franklin'},
                    { name: 'Crete Round', value: 'Crete+Round'},
                    { name: 'Alegreya', value: 'Alegreya'},
                    { name: 'PT Sans Caption', value: 'PT+Sans+Caption'},
                    { name: 'Alegreya Sans', value: 'Alegreya+Sans'},
                    { name: 'Source Code Pro', value: 'Source+Code+Pro'},
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
