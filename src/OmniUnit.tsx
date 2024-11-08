import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SheetContainer } from "./stages/sheets/sheet-container/sheet-container";

function OmniUnit() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SheetContainer />} path="/" />
      </Routes>
    </HashRouter>
  );
}

export default OmniUnit;
