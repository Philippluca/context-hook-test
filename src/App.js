import React, { useState, useEffect } from "react";
import GraphicLayer from "./components/GraphicLayer";
import Graphic from "./components/Graphic";
import { APIContextProvider } from "./components/APIContext";

const Test = ({ count, children }) => {
  return (
    <div>
      <div>{count}</div>
      {children}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const handle = setInterval(() => setCount((count + 1) % 5), 3000);
    return () => {
      clearInterval(handle);
    };
  });

  const range = [];
  for (let i = 0; i < count; i++) {
    range.push(i);
  }

  return (
    <div className="App">
      <APIContextProvider>
        <GraphicLayer>
          {range.map(i => {
            return <Graphic key={i} id={i} />;
          })}
        </GraphicLayer>
        <GraphicLayer />
      </APIContextProvider>
    </div>
  );
}

export default App;
