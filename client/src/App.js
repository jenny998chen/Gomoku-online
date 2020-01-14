import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";
let socket = socketIOClient("localhost:3001");
function App() {
  useEffect(() => {
    socket.emit("test")
    socket.on("test", data => console.log(data));
    fetch("/login")
        .then(res => res.text())
        .then(res => console.log(res));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
