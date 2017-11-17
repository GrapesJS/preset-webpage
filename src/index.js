import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
  let config = opts;

  let defaults = {
    // default options
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }

  // Add components
  loadComponents(editor, config);

  // Add blocks
  loadBlocks(editor, config);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
});
