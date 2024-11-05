import React from "react";

type FileLoadProps = {
  setFilePathsOut: (newType: File) => void;
  isLoading: (Boolean) => void;
};

export function FileLoad({ setFilePathsOut, isLoading }: FileLoadProps) {
  let fileHandle;

  const getFile = async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    isLoading(true);
    setFilePathsOut(file);
  };

  const triggerFileDialog = async () => {
    await getFile();
  };

  return (
    <>
      <button id="fileDialogBtn" onClick={triggerFileDialog}>
        Open CBT File
      </button>
    </>
  );
}
