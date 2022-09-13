import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '.';

import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './consts';

export default (editor: grapesjs.Editor, config: RequiredPluginOptions) => {
  const { Panels } = editor;
  const eConfig = editor.getConfig();
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';

  // @ts-ignore
  eConfig.showDevices = false;

  Panels.getPanels().reset([
    {
      id: 'commands',
      buttons: [{}],
    },
    {
      id: 'options',
      buttons: [{
        id: swv,
        command: swv,
        context: swv,
        className: 'fa fa-square-o',
      },{
        id: prv,
        context: prv,
        command: () => editor.runCommand(prv),
        className: 'fa fa-eye',
      },{
        id: ful,
        command: ful,
        context: ful,
        className: 'fa fa-arrows-alt',
      },{
        id: expt,
        className: 'fa fa-code',
        command: () => editor.runCommand(expt),
      },{
        id: 'undo',
        className: 'fa fa-undo',
        command: () => editor.runCommand('core:undo'),
      },{
        id: 'redo',
        className: 'fa fa-repeat',
        command: () => editor.runCommand('core:redo'),
      },{
        id: cmdImport,
        className: 'fa fa-download',
        command: () => editor.runCommand(cmdImport),
      },{
        id: cmdClear,
        className: 'fa fa-trash',
        command: () => editor.runCommand(cmdClear),
      }],
  },{
    id: 'views',
    buttons  : [{
      id: osm,
      command: osm,
      active: true,
      className: 'fa fa-paint-brush',
    },{
      id: otm,
      command: otm,
      className: 'fa fa-cog',
    },{
      id: ola,
      command: ola,
      className: 'fa fa-bars',
    },{
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
    }],
  }]);

  // Add devices buttons
  const panelDevices = Panels.addPanel({id: 'devices-c'});

  // @ts-ignore
  panelDevices.get('buttons').add([{
    id: cmdDeviceDesktop,
    command: cmdDeviceDesktop,
    className: 'fa fa-desktop',
    active: true,
  },{
    id: cmdDeviceTablet,
    command: cmdDeviceTablet,
    className: 'fa fa-tablet',
  },{
    id: cmdDeviceMobile,
    command: cmdDeviceMobile,
    className: 'fa fa-mobile',
  }]);

  const openBl = Panels.getButton('views', obl);
  editor.on('load', () => openBl && openBl.set('active', true));

  // On component change show the Style Manager
  config.showStylesOnChange && editor.on('component:selected', () => {
    const openSmBtn = Panels.getButton('views', osm);
    const openLayersBtn = Panels.getButton('views', ola);

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', true);
    }
  });
}
