import { ArmorSection } from "./armor-section";
import { Pips } from "../../../common/pips";
import { LocationsEnum } from "../../../common/types/InternalType";

export function ArmorDiagram(
) {
    return (
        <section>
            <ArmorSection loc={'HD'} prettyLoc={LocationsEnum.HD}>
                <Pips count={0} type="armor"></Pips>
            </ArmorSection>
            <div>
                
           </div>
           <div>
                right arm
           </div>
        </section>
    )
}