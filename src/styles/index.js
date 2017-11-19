export default (editor, config) => {
  // On component change show the Style Manager
  editor.on('change:selectedComponent', function() {
    var openLayersBtn = editor.Panels.getButton('views', 'open-layers');

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if((!openLayersBtn || !openLayersBtn.get('active')) &&
      editor.editor.get('selectedComponent')){
      var openSmBtn = editor.Panels.getButton('views', 'open-sm');
      openSmBtn.set('attributes',{ title:defaults.openSmBtnTitle });
      openSmBtn && openSmBtn.set('active', 1);
    }
  });
}
