export enum TechLvl {
    TECHUNK = 'unkown',
    TECHINTRO = 'intro boxset',
    ISONE = 'is level 1',
    ISTWO = 'is level 2',
    ISTHREE = 'is level 3',
    ISADV = 'is level advanced',
    ISEXP = 'is level experimental',
    CLANONE = 'clan level 1',
    CLANTWO = 'clan level 2',
    CLANTHREE = 'clan level 3',
    CLANADV = 'clan level advanced',
    CLANEXP = 'clan level experimental'
}

export enum UnitRole {
    NONE = 'none',
    AMBUSHER = 'ambusher',
    MISSILEBOAT = 'missle boat',
    SCOUT = 'scout',
    JUGGERNAUT = 'juggernaut',
    BRAWLER = 'brawler',
    SKIRMISHER = 'skirmisher'

}

export enum MoveTypeEnum {
    JUMP = 'jump',
    LEG = 'leg',
    QUAD = 'quad'
}

export enum TransportersEnum {

}

export enum BAChassisEnum {
    BIPED = 'biped',
    QUAD = 'quad',
    QUADV = 'quad-vee'
}

export type Movements = {
    walk: number | 0;
    run: number | 0;
    jump: number | 0;
    cruise: number | 0;
    flanking: number | 0;
}

export type Fluff = {
    capabilities: string;
    overview: string;
    deployment: string;
    history: string;
    manufacturer: string[];
    primaryFactory: string[];
    systemsManufactuers: {
        chassis: string | 'unknown';
        engine: string | 'unknown';
        armor: string | 'unknown';
        jumpJet: string | 'unknown';
        comms: string | 'unknown';
        targeting: string | 'unknown';
    } | undefined;
    source: string | undefined
}