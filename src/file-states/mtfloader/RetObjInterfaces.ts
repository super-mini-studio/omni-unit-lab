export interface QuadRetObj extends RetObj {
    crits: {
        lt: [],
        rt: [],
        ct: [],
        hd: [],
        fll: [],
        frl: [],
        rll: [],
        rrl: [],
    }
}

export interface BipedRetObj extends RetObj {
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

export interface RetObj {
    chassis: string,
    model: string,
    mul: number,
    config: string,
    techbase: string,
    era: string,
    source: string,
    rules: string,
    role: string
    quirk: string[],
    mass: number,
    engine: string,
    structure: string,
    myomer: string,
    'heat sinks': string,
    walk: number,
    run: number,
    jump: number,
    armortype: string,
    armor: [],
    internals: {},
    arms: string[],
}