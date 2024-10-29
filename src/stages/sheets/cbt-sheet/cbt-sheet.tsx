import React, { useState } from 'react';
import { FileLoad } from '../fileLoadDialog';
import { Mech } from '../../../common/mech';

export function CbtSheet() {
    const [filePathsOut, setFilePathsOut] = useState<string[]>([]);
    const [rs, setRs] = useState<Mech>();
    return (
        <>
            <section>
                {!rs && (
                    <FileLoad setFilePathsOut={setFilePathsOut} />
                )}
                {rs && (
                    <p>
                        hi
                    </p>
                )}
            </section>
        </>
    )
}