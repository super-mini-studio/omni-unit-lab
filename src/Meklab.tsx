import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CbtSheet } from './stages/sheets/cbt-sheet/cbt-sheet';


function Meklab() {
    return (
        <HashRouter>
            <Routes>
                <Route 
                    element={
                        <CbtSheet></CbtSheet>
                    }
                    path="/" 
                />
            </Routes>
        </HashRouter>
    )
}

export default Meklab;