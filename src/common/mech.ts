import { Fluff } from "../fluff/fluff";
import { ArmorFactory } from "./armor-factory";
import { CriticalSlots } from "./critical-slots";
import { EngineFactory } from "./engine-factory";
import { InternalsFactory } from "./internals-factory";
import { TonnageWatcher } from "./tonnage-watcher";

export class Mech {
    chassis = '';
    armor = new ArmorFactory();
    crits = new CriticalSlots();
    engine = new EngineFactory();
    equipment = [];
    fluff = new Fluff();
    internals = new InternalsFactory();
    isQuad = false;
    myomer = '';
    tonnage = new TonnageWatcher();
    weapons = 0;
}