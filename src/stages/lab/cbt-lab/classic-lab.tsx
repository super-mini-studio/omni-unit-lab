import { useState } from "react";
import RootNav from "../../../navigation/root-nav";
import { ArmorDiagram } from "./armor-diagram";
import { InternalDiagram } from "./internal-diagram";
import { Mech } from "../../../common/mech";
import * as fs from 'fs';
import { unitFileTypeIdentifier } from "../../../file-states/unit-file-type-identifier";
import { MTFClass } from "src/file-states/mtfloader/MTFClass";

export function ClassicLab() {    
    const [paths, setPaths] = useState<string[]>([]);
    const [unit, setUnit] = useState<Mech>();
    
    const handleFilePath = (p: string[]) => {
        setPaths(p);
    }

    const handleParseFile = (fp: string) => {
        const unitFileType = unitFileTypeIdentifier(fp)
        const parsedFile = fs.readFileSync(fp, {encoding: "utf8"});

        try {
            let unitAsSet;

            if(unitFileType === 'mtf'){
                unitAsSet = MTFClass.reader(parsedFile)
            } else if(unitFileType === 'blk') {
                return false
            }

            return parsedFile;
        } catch (e) {
            console.log('could parse file to unit object')
        }
    };

    return (
        <>
            <RootNav page="lab-cbt" cbtLoad={this.handleFilePath} />
            <section>
                <p>Classic Btech Lab</p>
            </section>
            <section>
                <p>fluff and basic details</p>
                <p>pilot</p>
            </section>
            <section>
                <p>equipment</p>
            </section>
            <section>
                <ArmorDiagram></ArmorDiagram>
                <InternalDiagram></InternalDiagram>
            </section>
        </>
    )
}
