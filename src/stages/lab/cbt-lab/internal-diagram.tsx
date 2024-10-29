import { InternalSection } from "./internal-section";
import { Pips } from "../../../common/pips";
import { LocationsEnum } from "../../../common/types/InternalType";


export function InternalDiagram() {
    return (
        <section>
            <InternalSection loc={'HD'} prettyLoc={LocationsEnum.HD}>
                <Pips count={0} type="structure"/>
            </InternalSection>
            <div>
                
           </div>
           <div>
                right arm
           </div>
        </section>
    )
}