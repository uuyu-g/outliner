import { BrowserWindow, dialog } from 'electron';

export function createOpenDialogHandler(
  mainWindow: BrowserWindow,
): (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any {
  return async (_e, _arg) => {
    return (
      dialog
        // ファイル選択ダイアログを表示する
        .showOpenDialog(mainWindow, {
          properties: ['openFile'],
        })
        .then((result) => {
          // キャンセルボタンが押されたとき
          if (result.canceled) return '';

          // 選択されたファイルの絶対パスを返す
          return result.filePaths[0];
        })
        .catch((err) => console.error(err))
    );
  };
}
