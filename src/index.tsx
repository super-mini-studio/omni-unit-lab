import React from "react";
import { createRoot } from "react-dom/client";
import OmniUnit from "./OmniUnit";
import "./index.scss";

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <OmniUnit />
  </React.StrictMode>
);
