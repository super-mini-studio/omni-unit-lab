import {dialog} from 'electron';
import {} from 'react-dom';

type FileLoadProps = {
    setFilePathsOut: (newType: string[]) => void;
}

export function FileLoad(
    {
        setFilePathsOut
    }: FileLoadProps
){
   

    const triggerFileDialog = async () => {
        const pathPromise = await dialog.showOpenDialog(
            {
                buttonLabel: 'Open File',
                filters: [
                    {
                        name: 'Mech Files',
                        extensions: [
                            'mtf', 
                            'blk'
                        ]
                    }
                ],
                message: 'Open Existing Unit File',
                properties: [
                    'openFile',
                    'treatPackageAsDirectory'
                ]
            }
        );

        const paths = pathPromise.filePaths;

        setFilePathsOut(paths);
    }

    return (
        <>
            <button id="fileDialogBtn" onClick={triggerFileDialog}>Open CBT File</button>
        </>
    )
}