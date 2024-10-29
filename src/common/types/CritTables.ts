export interface MechCritTable {
    HD: string[];
    CT: string[];
    LT: string[];
    RT: string[];
    LA: string[];
    RA: string[];
    LL: string[];
    RL: string[];
}

export interface QuadMechCritTable {
    HD: string[];
    CT: string[];
    LT: string[];
    RT: string[];
    FLL: string[];
    FRL: string[];
    RLL: string[];
    RRL: string[];
}

export interface VehicleCritTable {
    TR: string[];
    FT: string[];
    RR: string[];
    LS: string[];
    RS: string[];
}

export interface VTOLCritTable {
    FT: string[];
    RR: string[];
    LS: string[];
    RS: string[];
}

export type CritEquipmentDetails = {
    name: string;
    slots: number;
    slotsRemaining: number;
    contiguous: boolean;
    group: boolean;
    groupCount: number;
}