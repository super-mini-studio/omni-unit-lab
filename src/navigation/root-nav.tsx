import React, { useState } from 'react';
import { FileLoad } from '../stages/sheets/fileLoadDialog';

interface NavProps {
    page: 'sheets';
}

function RootNav(
    {
        page
    }: NavProps
): JSX.Element {
    const [paths, setPaths] = useState<string[]>([]);
    
    return (
        <>
            <nav>
                {page === 'sheets' && (
                    <ol>
                        <li>Load File</li>
                    </ol> 
                )}
            </nav>
        </>
    )
} 

export default RootNav;