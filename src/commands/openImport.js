export default (editor, config) => {
  const opt = {};


  const pfx = editor.getConfig('stylePrefix');
  const modal = editor.Modal;
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  const container = document.createElement('div');
  let viewerEditor = codeViewer.editor;

  // Init import button
  const btnImp = document.createElement('button');
  btnImp.type = 'button';
  btnImp.innerHTML = 'Import';
  btnImp.className = `${pfx}btn-prim ${pfx}btn-import`;
  btnImp.onclick = () => {
    editor.setComponents(viewerEditor.getValue().trim());
    modal.close();
  };

  // Init code viewer
  codeViewer.set({
    codeName: 'htmlmixed',
    theme: opt.codeViewerTheme || 'hopscotch',
    readOnly: 0
  });

  return {
    run(editor, sender) {
      let modalContent = modal.getContentEl();
      modal.setTitle();//opt.modalTitleImport

      // Init code viewer if not yet instantiated
      if(!viewerEditor){
        let txtarea = document.createElement('textarea');

        if(opt.modalLabelImport) {
          let labelEl = document.createElement('div');
          labelEl.className = pfx + 'import-label';
          labelEl.innerHTML = opt.modalLabelImport;
          container.appendChild(labelEl);
        }
        container.appendChild(txtarea);
        container.appendChild(btnImp);
        codeViewer.init(txtarea);
        viewerEditor = codeViewer.editor;
      }
      modal.setContent('');
      modal.setContent(container);
      codeViewer.setContent(opt.importPlaceholder || '');
      modal.open();
      viewerEditor.refresh();
      sender && sender.set('active', 0);
    },

    stop() {

    }
  };
}
