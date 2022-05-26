//TODO: NodePTyManager
const os = require("os");
const pty = require("node-pty");
const { getWindow } = require("./windowManager");
const shell = process.env[os.platform() === "win32" ? "COMSPEC" : "SHELL"];

class NodePty {
  constructor(cwd) {
    this.ptyProcess = pty.spawn(shell, [], {
      name: "xterm-color",
      cols: 80,
      rows: 30,
      cwd,
      env: process.env,
    });

    this.ptyProcess.on("data", (data) => {
      const win = getWindow();
      win.webContents.send("shell-data", data);
    });

    this.ptyProcess.on("exit", (exitCode, signal) => {
      console.log("Shell closed");
      const win = getWindow();
      win.webContents.send("shell-exit", exitCode, signal);
    });

    console.log("Shell Spawned");
  }

  write(cmd) {
    this.ptyProcess.write(cmd);
  }
}

module.exports = NodePty;
