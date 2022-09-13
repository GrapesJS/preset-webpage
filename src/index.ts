import type grapesjs from 'grapesjs';
import commands from './commands';
import blocks from './blocks';
import panels from './panels';

export type PluginOptions = {
  /**
   * Which blocks to add.
   * @default ['link-block', 'quote', 'text-basic']
   */
  blocks?: string[];

  /**
   * Modal import title.
   * @default 'Import'
   */
  modalImportTitle?: string;

  /**
   * Modal import button text.
   * @default 'Import'
   */
  modalImportButton?: string;

  /**
   * Import description inside import modal.
   * @default ''
   */
   modalImportLabel?: string;

  /**
   * Default content to setup on import model open.
   * Could also be a function with a dynamic content return (must be a string).
   * @default ''
   * @example editor => editor.getHtml()
   */
   modalImportContent?: string | ((editor: grapesjs.Editor) => string);

   /**
    * Code viewer (eg. CodeMirror) options.
    * @default {}
    */
   importViewerOptions?: Record<string, any>;

   /**
    * Confirm text before clearing the canvas.
    * @default 'Are you sure you want to clear the canvas?'
    */
   textCleanCanvas?: string;

   /**
    * Show the Style Manager on component change.
    * @default true
    */
   showStylesOnChange?: boolean;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: grapesjs.Plugin<PluginOptions> = (editor, opts: Partial<PluginOptions> = {}) => {
  const config: RequiredPluginOptions = {
    blocks: ['link-block', 'quote', 'text-basic'],
    modalImportTitle: 'Import',
    modalImportButton: 'Import',
    modalImportLabel: '',
    modalImportContent: '',
    importViewerOptions: {},
    textCleanCanvas: 'Are you sure you want to clear the canvas?',
    showStylesOnChange: true,
    ...opts,
  };

  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // Load panels
  panels(editor, config);
}

export default plugin;
