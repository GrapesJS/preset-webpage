import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '..';

import openImport from './openImport';
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './../consts';

export default (editor: grapesjs.Editor, config: RequiredPluginOptions) => {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;

  Commands.add(cmdImport, openImport(editor, config));
  Commands.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
  Commands.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
  Commands.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'));
  Commands.add(cmdClear, e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
}
