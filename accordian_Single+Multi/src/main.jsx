import "./index.css";

import { AccordionProvider } from "./components/contexts/AccordionProvider.jsx";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccordionProvider>
      <App />
    </AccordionProvider>
  </StrictMode>
);
