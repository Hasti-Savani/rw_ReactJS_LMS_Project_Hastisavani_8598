import "./App.css";

function App() {
  const showMessage = (name) => {
    alert(`Hello ${name}`);
    console.log(`Hello ${name}`);
  };

  return (
    <>
      <h2>Event Handler button</h2>
      <button className="btn" onClick={() => showMessage("React")}>
        Click
      </button>
    </>
  );
}

export default App;