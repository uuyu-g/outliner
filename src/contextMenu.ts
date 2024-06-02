import { Menu } from 'electron';

export function handleShowContextMenu() {
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+W',
          role: 'close',
        },
      ],
    },
    {
      type: 'separator',
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Console Log',
          click: () => console.log('context-menu'),
        },
      ],
    },
  ]);
  contextMenu.popup();
}
