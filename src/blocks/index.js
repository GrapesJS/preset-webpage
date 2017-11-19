import pluginBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';

export default (editor, config) => {
  const bm = editor.BlockManager;
  const blocksBasic = config.blocksBasicOpts;
  const navbarOpts = config.navbarOpts;

  // Load plugin
  blocksBasic && pluginBlocks(editor, blocksBasic);
  navbarOpts && pluginNavbar(editor, navbarOpts);
}
