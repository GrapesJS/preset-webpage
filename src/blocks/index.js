import pluginBlocks from 'grapesjs-blocks-basic';

export default (editor, config) => {
  const bm = editor.BlockManager;
  const blocksBasic = config.blocksBasicOpts;

  // Load plugin
  blocksBasic && pluginBlocks(editor, blocksBasic);
}
