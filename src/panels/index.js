import {
  cmdImport,
  cmdEdit,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './../consts';
import openEdit from "../commands/openEdit";

export default (editor, config) => {
  const pn = editor.Panels;
  const eConfig = editor.getConfig();
  const crc = 'create-comp';
  const mvc = 'move-comp';
  const swv = 'sw-visibility';
  // const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';
  const edt = 'edit';

  eConfig.showDevices = 0;

  pn.getPanels().reset([{
    id: 'commands',
    buttons: [{}],
  },{
    id: 'options',
    buttons: [{
      id: swv,
      command: swv,
      context: swv,
      className: 'fa fa-square-o',
    },{
      id: edt,
      context: edt,
      command:  e => e.runCommand(cmdEdit),
      className: 'fa fa-code',
        attributes: {
        'data-tooltip': 'Edit Code',
            'title': 'Edit Code',
            'data-tooltip-pos': 'bottom',
    },
    },{
      id: 'undo',
      className: 'fa fa-undo',
      command: e => e.runCommand('core:undo'),
        attributes: {
            'data-tooltip': 'Undo',
            'title': 'Undo',
            'data-tooltip-pos': 'bottom',
        },
    },{
      id: 'redo',
      className: 'fa fa-repeat',
      command: e => e.runCommand('core:redo'),
        attributes: {
            'data-tooltip': 'Redo',
            'title': 'Redo',
            'data-tooltip-pos': 'bottom',
        },
    }],
  },{
    id: 'views',
    buttons  : [{
      id: osm,
      command: osm,
      active: true,
      className: 'fa fa-paint-brush',
        attributes: {
            'data-tooltip': 'Options',
            'title': 'Options',
            'data-tooltip-pos': 'bottom',
        },
    },{
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
        attributes: {
            'data-tooltip': 'Elements',
            'title': 'Elements',
            'data-tooltip-pos': 'bottom',
        },
    }],
  }]);

  // Add devices buttons
  const panelDevices = pn.addPanel({id: 'devices-c'});
  panelDevices.get('buttons').add([{
      id: prv,
      context: prv,
      command: e => e.runCommand(prv),
      className: 'fa fa-eye',
      attributes: {
          'data-tooltip': 'Preview',
          'title': 'Preview',
          'data-tooltip-pos': 'bottom',
      },
  },{
      id: ful,
      command: ful,
      context: ful,
      className: 'fa fa-arrows-alt',
      attributes: {
          'data-tooltip': 'Full Screen',
          'title': 'Full Screen',
          'data-tooltip-pos': 'bottom',
      },
  },{
    id: cmdDeviceDesktop,
    command: cmdDeviceDesktop,
    className: 'fa fa-desktop',
    active: 1,
      attributes: {
          'data-tooltip': 'Desktop',
          'title': 'Desktop',
          'data-tooltip-pos': 'bottom',
      },
  },{
    id: cmdDeviceTablet,
    command: cmdDeviceTablet,
    className: 'fa fa-tablet',
      attributes: {
          'data-tooltip': 'Tablet',
          'title': 'Tablet',
          'data-tooltip-pos': 'bottom',
      },
  },{
    id: cmdDeviceMobile,
    command: cmdDeviceMobile,
    className: 'fa fa-mobile',
      attributes: {
          'data-tooltip': 'Mobile',
          'title': 'Mobile',
          'data-tooltip-pos': 'bottom',
      },
  }]);

  const openBl = pn.getButton('views', obl);
  editor.on('load', () => openBl && openBl.set('active', 1));

  // On component change show the Style Manager
  config.showStylesOnChange && editor.on('component:selected', () => {
    const openSmBtn = pn.getButton('views', osm);
    const openLayersBtn = pn.getButton('views', ola);

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', 1);
    }
  });
}
