interface ElectronAPI {
  openDialog: () => Promise<string>;
  showContextMenu: () => Promise<void>;
}

declare global {
  const myAPI: ElectronAPI;
}

export {};
