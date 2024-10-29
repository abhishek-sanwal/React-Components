import "./App.css";

import Accordion from "./components/Accordion";
import { useAccordionContext } from "./components/contexts/AccordionProvider";

function App() {
  const { dispatch, isMultiAllowed } = useAccordionContext();

  return (
    <div className="app">
      <h1>Accordion Component</h1>
      <button
        className="btn"
        onClick={() => dispatch({ type: "toggleAllowMultiple" })}
      >
        <span>{isMultiAllowed ? "Disable" : "Enable"}</span> Multi Selection
      </button>
      <Accordion />
    </div>
  );
}

export default App;
