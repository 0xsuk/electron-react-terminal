const { BrowserWindow } = require("electron");
const path = require("path");
let win = undefined;

const createWindow = () => {
  win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "..", "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
};

const getWindow = () => win;

module.exports = {
  createWindow,
  getWindow,
};
