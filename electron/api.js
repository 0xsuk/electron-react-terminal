const NodePty = require("./lib/NodePty");

let ptyProcess = undefined;

exports.typeCommand = (_, cmd) => {
  if (ptyProcess === undefined) {
    return;
  }
  ptyProcess.write(cmd);
};

exports.spawnShell = (_, cwd) => {
  ptyProcess = new NodePty(cwd);
};
