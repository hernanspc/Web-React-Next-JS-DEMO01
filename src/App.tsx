import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { useRouter } from "next/router";

function App() {
  // const router = useRouter();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo <code>src/App.tsx</code> este es un demo nada mas.
        </p>
        <button
          onClick={() => {
            console.log("ss");
          }}
        >
          {"Siguiente"}
        </button>

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
