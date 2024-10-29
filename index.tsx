import React from 'react';
import { createRoot } from  'react-dom/client';
import Meklab from './Meklab';

const root = createRoot(document.body);
root.render(
    <React.StrictMode>
        <Meklab />
    </React.StrictMode>
)