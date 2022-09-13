import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '.';

export default (editor: grapesjs.Editor, config: RequiredPluginOptions) => {
  const sm = editor.StyleManager;
  // @ts-ignore
  const csm = config.customStyleManager;

  editor.on('load', function () {
    sm.getSectors().reset(csm && csm.length ? csm : [{
      name: 'General',
      open: false,
      buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
    },{
      name: 'Layout',
      open: false,
      buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
    },{
      name: 'Typography',
      open: false,
      buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
      properties: [{
        property: 'text-align',
        list: [
            { value: 'left', className: 'fa fa-align-left' },
            { value: 'center', className: 'fa fa-align-center'  },
            { value: 'right', className: 'fa fa-align-right' },
            { value: 'justify', className: 'fa fa-align-justify' },
        ],
      }]
    },{
      name: 'Decorations',
      open: false,
      buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
    },{
      name: 'Extra',
      open: false,
      buildProps: ['transition', 'perspective', 'transform'],
    }]);
  })
}
