const NodePty = require("./lib/NodePty");
const { getWindow } = require("./lib/windowManager");

exports.spawnShell = (_, cwd, cmd) => {
  const win = getWindow();
  const pty = new NodePty(win, cwd);
  pty.write(cmd);
};
