import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // (or whatever your root component is)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);