import { useState } from "react";
import "./App.css";

const initialData = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "App.js", type: "file" },
        { name: "index.js", type: "file" }
      ]
    },
    {
      name: "public",
      type: "folder",
      children: [{ name: "index.html", type: "file" }]
    },
    { name: "package.json", type: "file" }
  ]
};

function Explorer({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (data.type === "file") {
    return <div className="file">📄 {data.name}</div>;
  }

  return (
    <div className="folder">
      <div className="folder-name" onClick={() => setIsOpen(!isOpen)}>
        📁 {data.name}
      </div>
      {isOpen && (
        <div className="children">
          {data.children.map((item, index) => (
            <Explorer key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h2>React File Explorer</h2>
      <Explorer data={initialData} />
    </div>
  );
}