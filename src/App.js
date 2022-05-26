import { useEffect } from "react";
import { Terminal } from "xterm";
function App() {
  useEffect(() => {
    const xterm = new Terminal();
    xterm.open(document.getElementById("terminal"));
    window.electronAPI.onShellData((_, data) => {
      xterm.write(data);
    });
  }, []);
  return <div id="terminal"></div>;
}

export default App;
