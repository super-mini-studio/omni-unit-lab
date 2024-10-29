import { locInternalTuple } from "./InternalType";

export enum ArmorTypeEnum {
    'STANDARD' = 'Standard',
    'FERRO' = 'Ferrofibrous',
    'RFLCT' = 'Reflective'
}

// current amount, max amount
export type AmountUsedMaxTuple = [
    number,
    number
];

export type CBTBipedMechArmor = {
    armorType: ArmorTypeEnum;
    armorInternals: locInternalTuple[];
    armorInternalsCritMax: number;
    tonnage: number;
    armorFactor: number;
    LA: AmountUsedMaxTuple;
    RA: AmountUsedMaxTuple;
    LT: AmountUsedMaxTuple;
    RT: AmountUsedMaxTuple;
    CT: AmountUsedMaxTuple;
    HD: AmountUsedMaxTuple;
    LL: AmountUsedMaxTuple;
    RL: AmountUsedMaxTuple;
    RTL: AmountUsedMaxTuple;
    RTR: AmountUsedMaxTuple;
    RTC: AmountUsedMaxTuple;
    max: number
}

export type DestBipedMechArmor = {
    armorType: ArmorTypeEnum;
    tonnage: number;
    armorFactor: number;
    LA: AmountUsedMaxTuple;
    RA: AmountUsedMaxTuple;
    CT: AmountUsedMaxTuple;
    LL: AmountUsedMaxTuple;
    RL: AmountUsedMaxTuple;
    RTC: AmountUsedMaxTuple;
    max: number;
}