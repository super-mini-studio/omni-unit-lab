import React from 'react';
import { createRoot } from  'react-dom/client';
import OmniUnit from './OmniUnit';

const root = createRoot(document.body);
root.render(
    <React.StrictMode>
        <OmniUnit />
    </React.StrictMode>
)