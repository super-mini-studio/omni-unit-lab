import { Fluff } from "../fluff/fluff";
import { ArmorFactory } from "./armor-factory";
import { CriticalSlots } from "./critical-slots";
import { EngineFactory } from "./engine-factory";
import { InternalsFactory } from "./internals-factory";
import { TonnageWatcher } from "./tonnage-watcher";
import { SimpleInternals } from "./types/InternalConstants";

export interface IBipedCrits { 
    crits: {
        la: [],
        ra: [],
        lt: [],
        rt: [],
        ct: [],
        hd: [],
        ll: [],
        rl: [],
    }
}

export interface IQuadCrits {
    crits: {
        fll: [],
        frl: [],
        lt: [],
        rt: [],
        ct: [],
        hd: [],
        rll: [],
        rrl: [],
    }
}

export interface IMech {
    chassis: string;
    model: string;
    mul: number;
    config: string;
    techbase: string;
    era: string;
    source: string;
    rules: string;
    role: string;
    quirk: string[];
    mass: number;
    engine: string;
    structure: string;
    myomer: string;
    'heat sinks': string;
    walk: number;
    run: number;
    jump: number;
    armortype: string;
    armor: [];
    internals: SimpleInternals
    arms: string[][];
    
    // chassis = '';
    // armor = new ArmorFactory();
    // crits = new CriticalSlots();
    // engine = new EngineFactory();
    // equipment = [];
    // fluff = new Fluff();
    // internals = new InternalsFactory();
    // isQuad = false;
    // myomer = '';
    // tonnage = new TonnageWatcher();
    // weapons = 0;
}

export class QuadMech implements IMech, IQuadCrits {
    chassis: string;
    model: string;
    mul: number;
    config: string;
    techbase: string;
    era: string;
    source: string;
    rules: string;
    role: string;
    quirk: string[];
    mass: number;
    engine: string;
    structure: string;
    myomer: string;
    'heat sinks': string;
    walk: number;
    run: number;
    jump: number;
    armortype: string;
    armor;
    internals: SimpleInternals;
    arms: string[][];
    crits: { fll: []; frl: []; lt: []; rt: []; ct: []; hd: []; rll: []; rrl: []; };
};

export class Mech implements IMech, IBipedCrits {
    chassis: string;
    model: string;
    mul: number;
    config: string;
    techbase: string;
    era: string;
    source: string;
    rules: string;
    role: string;
    quirk: string[];
    mass: number;
    engine: string;
    structure: string;
    myomer: string;
    'heat sinks': string;
    walk: number;
    run: number;
    jump: number;
    armortype: string;
    armor;
    internals: SimpleInternals;
    arms: string[][];
    crits: { la: []; ra: []; lt: []; rt: []; ct: []; hd: []; ll: []; rl: []; };
}