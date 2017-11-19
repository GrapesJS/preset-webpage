import pluginBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginForms from 'grapesjs-plugin-forms';

export default (editor, config) => {
  const bm = editor.BlockManager;
  const {
    blocksBasicOpts,
    navbarOpts,
    countdownOpts,
    formsOpts
  } = config;

  // Load plugin
  blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
  navbarOpts && pluginNavbar(editor, navbarOpts);
  countdownOpts && pluginCountdown(editor, countdownOpts);
  formsOpts && pluginForms(editor, formsOpts);
}
