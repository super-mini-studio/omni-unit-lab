import { AmountUsedMaxTuple } from "./ArmorType";

export type locInternalTuple = [
    LocationsEnum,
    number
];

export enum StructureTypeEnum {
    STANDARD = 'Standard',
    ENDO = 'Endo-Steel',
}

// todo: move this to either a nested aspect of 
export type InternalsPlacementsType = {
    place: LocationsEnum;
    slots: [
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-'
    ]
}

export enum LocationsEnum {
    HD = "Head",
    LA = "Left Arm",
    RA = "Right Arm",
    LT = "Left Torso",
    RT = "Right Torso",
    CT = "Center Torso",
    LL = "Left Leg",
    RL = "Right Leg",
    RTL = "Rear Left Torso",
    RTR = "Rear Right Torso",
    RTC = "Rear Center Torso"
}

export type CBTBipedMechInternal = {
    structureType: StructureTypeEnum;
    tonnage: number;
    LA: AmountUsedMaxTuple;
    RA: AmountUsedMaxTuple;
    LT: AmountUsedMaxTuple;
    RT: AmountUsedMaxTuple;
    CT: AmountUsedMaxTuple;
    HD: AmountUsedMaxTuple;
    LL: AmountUsedMaxTuple;
    RL: AmountUsedMaxTuple;
}

export type DestBipedMechInternal = {
    structureType: StructureTypeEnum;
    tonnage: number;
    LA: AmountUsedMaxTuple[];
    RA: AmountUsedMaxTuple[];
    CT: AmountUsedMaxTuple[];
    HD: AmountUsedMaxTuple[];
    LL: AmountUsedMaxTuple[];
    RL: AmountUsedMaxTuple[];
}

export type internalCritSlotInventory = {
    critItem: {
        remaining: number;
        contiguous: boolean;
        id: number;
        name: string;
        allowedLocs: string[];
    }
}