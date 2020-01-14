import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
let socket = io();
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
      gomoku
    </div>
  );
}

export default App;
