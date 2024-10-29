export enum GenericQuirks {
    EASY_TO_MAINTAIN = 'Easy to Maintain'
}

export enum WeaponQuirks {
    STABLE_WEAPON = 'Stable Weapon'
}

export enum ChassisQuirks {

}

export enum EquipmentQuirks {

}

export type GenericQuirkSet = {
    genericQuirk: GenericQuirks;
    loc: string | undefined;
    locId: number | undefined;
    generic: string;
}

export type EquipmentQuirkSet = {
    equipmentQuirk: EquipmentQuirks;
    loc: string;
    locId: number;
    equipment: string;
}

export type WeaponQuirkSet = {
    weaponQuirk: WeaponQuirks;
    loc: string;
    locId: number;
    weapon: string;
}

export type ChassisQuirkSet = {
    chassisQuirk: ChassisQuirks;
    loc: string | undefined;
    locId: number | undefined;
    chassis: string | undefined;
}

export type QuirkTypes = {
    quirkedGeneric: GenericQuirkSet[] | undefined;
    quirkedWeapons: WeaponQuirkSet[] | undefined;
    quirkedEquipment: EquipmentQuirkSet[] | undefined;
    quirkedChassis: ChassisQuirkSet[] | undefined;
}
