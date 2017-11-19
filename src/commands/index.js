import openImport from './OpenImport';

export default (editor, config) => {
  const cm = editor.Commands;
  const txtConfirm = config.textCleanCanvas;

  cm.add('gjs-open-import-webpage', openImport(editor, config));
  cm.add('set-device-desktop', e => e.setDevice('Desktop'));
  cm.add('set-device-tablet', e => e.setDevice('Tablet'));
  cm.add('set-device-mobile', e => e.setDevice('Mobile portrait'));
  cm.add('canvas-clear', e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
}
