import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import path from 'path';
import { menu } from './menu';
import { handleShowContextMenu } from './contextMenu';
import { createOpenDialogHandler } from './dialog';
import windowStateKeeper from 'electron-window-state';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let isRegistered = false;

const createWindow = () => {
  const windowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 640,
  });

  const mainWindow = new BrowserWindow({
    width: windowState.width,
    height: windowState.height,
    x: windowState.x,
    y: windowState.y,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (!isRegistered) {
    Menu.setApplicationMenu(menu);
    ipcMain.handle('show-context-menu', handleShowContextMenu);
    ipcMain.handle('open-dialog', createOpenDialogHandler(mainWindow));
    isRegistered = true;
  }

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
  mainWindow.webContents.openDevTools();
  windowState.manage(mainWindow);
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
