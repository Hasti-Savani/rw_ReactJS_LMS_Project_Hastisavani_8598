import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p className="read-the-docs">Total Count is {count}</p>
      <div className="card">
        <button onClick={() => setCount(count + 1)} className="logo">
          Incremet
        </button>
        <button onClick={() => setCount(0)} className="logo">
          Reset
        </button>
        <button
          onClick={
            count <= 0 ? () => setCount(count) : () => setCount(count - 1)
          }
          className="logo"
        >
          Decremet
        </button>
      </div>
    </>
  );
}

export default App;