export default (editor, config) => {
  const pfx = editor.getConfig('stylePrefix');
  const modal = editor.Modal;
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  const container = document.createElement('div');
  const editLabel = config.modalEditLabel;
  const editCnt = config.modalEditContent;
  let viewerEditor = codeViewer.editor;

  // Init import button
  const btnImp = document.createElement('button');
  btnImp.type = 'button';
  btnImp.innerHTML = config.modalEditButton;
  btnImp.className = `${pfx}btn-prim ${pfx}btn-import`;
  btnImp.onclick = e => {
    editor.setComponents(viewerEditor.getValue().trim());
    modal.close();
  };

  // Init code viewer
  codeViewer.set({ ...{
    codeName: 'htmlmixed',
    theme: 'hopscotch',
    readOnly: 0
  }, ...config.editViewerOptions});

  return {
    run(editor) {
      if (!viewerEditor) {
        const txtarea = document.createElement('textarea');

        if (editLabel) {
          const labelEl = document.createElement('div');
          labelEl.className = `${pfx}import-label`;
          labelEl.innerHTML = editLabel;
          container.appendChild(labelEl);
        }

        container.appendChild(txtarea);
        container.appendChild(btnImp);
        codeViewer.init(txtarea);
        viewerEditor = codeViewer.editor;
      }

      modal.setTitle(config.modalEditTitle);
      modal.setContent(container);
      const cnt = typeof editCnt == 'function' ? editCnt(editor) : editCnt;
      codeViewer.setContent(cnt || '');
      modal.open();
      viewerEditor.refresh();
    },

    stop() {
      modal.close();
    }
  }
}
