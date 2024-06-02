interface ElectronAPI {
  openDialog: () => Promise<string>;
}

declare global {
  const myAPI: ElectronAPI;
}

export {};
