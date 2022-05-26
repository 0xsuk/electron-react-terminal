const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron/main");
const { createWindow } = require("./lib/windowManager");
const { spawnShell, typeCommand } = require("./api");

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle("type-command", typeCommand);
  ipcMain.handle("spawn-shell", spawnShell);
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
