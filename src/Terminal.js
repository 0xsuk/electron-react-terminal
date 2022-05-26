import { useEffect } from "react";
import { Terminal as Xterm } from "xterm";
import "xterm/css/xterm.css";

function Terminal() {
  useEffect(() => {
    const xterm = new Xterm();
    xterm.open(document.getElementById("terminal"));
    window.electronAPI.onShellData((_, data) => {
      xterm.write(data);
    });
    window.electronAPI.onShellExit((_, exitCode, signal) => {
      console.log("shell exit", exitCode, signal);
      xterm.dispose();
    });
    xterm.onData((data) => window.electronAPI.typeCommand(data));

    window.electronAPI.spawnShell("/");
  }, []);
  return <div id="terminal"></div>;
}

export default Terminal;
