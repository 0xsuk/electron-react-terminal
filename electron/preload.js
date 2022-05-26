const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  typeCommand: (cmd) => ipcRenderer.invoke("type-command", cmd),
  spawnShell: (cwd) => ipcRenderer.invoke("spawn-shell", cwd),
  onShellData: (callback) => ipcRenderer.on("shell-data", callback),
  onShellExit: (callback) => ipcRenderer.on("shell-exit", callback),
});
