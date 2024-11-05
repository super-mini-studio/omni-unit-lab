import React, { useEffect, useState } from "react";
import { FileLoad } from "../fileLoadDialog";
import { Mech } from "../../../common/mech";
import { MTFClass } from "../../../file-states/mtfloader/MTFClass";

export function CbtSheet() {
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
        {rs && <p>{rs.chassis}</p>}
      </section>
    </>
  );
}
