'use client';
import { useState, useEffect } from "react";

export default function Home() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws/terminal");

    socket.onmessage = (event) => {
      setOutput((prev) => [...prev, event.data]);
    };

    setWs(socket);

    return () => socket.close();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(command);
      setCommand("");
    }
  };

  return (
      <div style={{ 
        padding: "20px",
        margin: "20px",
      }}>
        <h1>Welcome to termusp</h1>
        <div
            style={{
              border: "1px solid black",
              padding: "10px",
              height: "400px",
              overflowY: "scroll",
              backgroundColor: "#1e1e1e",
              color: "#00ff00",
              fontFamily: "monospace",
            }}
        >
          {output.map((line, idx) => (
              <div key={idx}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
          <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
              placeholder="Enter a command"
          />
        </form>
      </div>
  );
}

