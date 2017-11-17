import openImport from './openImport';

export default (editor, config) => {
  const cm = editor.Commands;

  cm.add('gjs-open-import-webpage', openImport(editor, config));

  cm.add('undo', {
    run(editor) {
      editor.UndoManager.undo(1);
    }
  });

  cm.add('redo', {
    run(editor) {
      editor.UndoManager.redo(1);
    }
  });


  // Device commands

  cm.add('set-device-desktop', {
    run(editor) {
      editor.setDevice('Desktop');
    }
  });

  cm.add('set-device-tablet', {
    run(editor) {
      editor.setDevice('Tablet');
    }
  });

  cm.add('set-device-mobile', {
    run(editor) {
      editor.setDevice('Mobile portrait');
    }
  });
}
