import pluginBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';

export default (editor, config) => {
  const bm = editor.BlockManager;
  const {
    blocksBasicOpts,
    navbarOpts,
    countdownOpts
  } = config;

  // Load plugin
  blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
  navbarOpts && pluginNavbar(editor, navbarOpts);
  countdownOpts && pluginCountdown(editor, countdownOpts);
}
