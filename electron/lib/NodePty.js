const os = require("os");
const pty = require("node-pty");
const shell = process.env[os.platform() === "win32" ? "COMSPEC" : "SHELL"];

class NodePty {
  constructor(win, cwd) {
    this.win = win;
    this.ptyProcess = pty.spawn(shell, [], {
      name: "xterm-color",
      //cols: 80,
      //rows: 30,
      cwd,
      env: process.env,
    });

    this.ptyProcess.on("data", (data) => {
      win.webContents.send("shelldata", { data });
    });
  }

  write(cmd) {
    this.ptyProcess.write(cmd);
  }
}

module.exports = NodePty;
