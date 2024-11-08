import React, { useEffect, useState } from "react";
import { FileLoad } from "../fileLoadDialog";
import { Mech } from "../../../common/mech";
import { MTFClass } from "../../../file-states/mtfloader/MTFClass";
import { CbtMechSheet } from "../cbt-sheets/cbt-mech-sheet";

export function SheetContainer() {
  const mtfClass = new MTFClass();
  const [filePathsOut, setFilePathsOut] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const [rs, setRs] = useState<Mech>();
  const fr = new FileReader();
  let loadedText;

  useEffect(() => {
    if (filePathsOut && loading) {
      fr.readAsText(filePathsOut);

      setLoading(false);
    }
  });

  fr.addEventListener("load", () => {
    loadedText = fr.result;

    const parsed = mtfClass.reader(loadedText);

    setRs(parsed);
  });

  return (
    <>
      <section>
        <FileLoad setFilePathsOut={setFilePathsOut} isLoading={setLoading} />
        {rs && <CbtMechSheet details={rs} />}
      </section>
    </>
  );
}
