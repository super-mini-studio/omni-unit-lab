import { Mech } from "../../../common/mech";

export function UnitOverview(
    mech: Mech
) {

    return (
        <section>
            <h3>Type: {mech.fluff.chassis} {mech.fluff.model}</h3>
            <div>
                <h4>Movement:</h4>
                <dl>
                    <dt>Walking:</dt><dd>{mech.engine.getWalking}</dd>
                    <dt>Running:</dt><dd>{mech.engine.getRunning}</dd>
                    <dt>Jumping:</dt><dd>{0}</dd>
                </dl>
            </div>
            <div>
                <h4>Details:</h4>
                <dl>
                    <dt>Tonnage:</dt><dd>{mech.tonnage.totalTonnage}</dd>
                    <dt>Tech Base:</dt><dd>{mech.fluff.techBase}</dd>
                    <dt>Rules Level:</dt><dd>{mech.fluff.techBase}</dd>
                    <dt>Role:</dt><dd>{mech.fluff.role}</dd>
                </dl>
            </div>
        </section>
    )
}