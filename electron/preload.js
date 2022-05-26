const { contextBridge, ipcRenderer } = require("electron");
const { spawnShell } = require("./api");

contextBridge.exposeInMainWorld("electronAPI", {
  spawnShell: () => ipcRenderer.invoke("spawn-shell", spawnShell),
  onShellData: (callback) => ipcRenderer.on("shelldata", callback),
});
