import { LocationsEnum } from "../../common/types/InternalType";
import { TechLvl } from "./MiscRecordTypes";

export type WeaponsListType = {
    name: string;
    loc: LocationsEnum;
}

export interface EnergyNameTriple {
    SML: [1, 'sml', 'small laser']
}

export interface BallisticNameTripple {
    AC2: [2, 'ac2', 'autocannon 2']
}

export interface MissileNameTriple {
    SRM2: [2, 'srm2', 'short range missile launcher 2'],
    SRM4: [4, 'srm4', 'short range missile launcher 4'],
    SRM6: [6, 'srm6', 'short range missile launcher 6'],
    SSRM2: [2, 'ssrm2', 'streak short range missile launcher 2'],
    SSRM4: [4, 'ssrm4', 'streak short range missile launcher 4'],
    SSRM6: [6, 'ssrm6', 'streak short range missile launcher 6'],
    MRM40: [],
    LRM5: [5, 'lrm5', 'long range missile launcher 5'],
    LRM10: [10, 'lrm10', 'long range missile launcher 10'],
    LRM15: [15, 'lrm15', 'long range missile launcher 15'],
    LRM20: [20, 'lrm20', 'long range missile launcher 20'],
    ATM3: [3, '', ''],
    ATM6: [6, '', ''],
    ATM9: [9, '', ''],
    RL0: [0, '', '']
}

export type GenericWeapon = {
    tonnage: number, 
    name: string, 
    abbr: string, 
    techNlvl: string,
    specialAmmoType: number | undefined,
    specialRules: string[] | undefined
};

export type MissileWeapon = GenericWeapon & {
    rackSize: number;
}

export type BallisticWeapon = GenericWeapon & {
    boreSize: number;
}

export class WeaponClass {
    energy: GenericWeapon = {
        tonnage: 0, 
        name: 'Small Laser', 
        abbr: 'sl', 
        techNlvl: TechLvl.ISONE, 
        specialAmmoType: undefined, 
        specialRules: undefined
    };
    missile: MissileWeapon = {
        tonnage: 0, 
        name: 'Short Range Missile Launcher 2', 
        abbr: 'srm2', 
        techNlvl: TechLvl.ISONE, 
        specialAmmoType: undefined,
        specialRules: undefined,
        rackSize: 2
    };
    ballistic: BallisticWeapon = {
        tonnage: 0, 
        name: 'Machine Gun', 
        abbr: 'mg', 
        techNlvl: TechLvl.ISONE, 
        specialAmmoType: undefined,
        specialRules: undefined,
        boreSize: 0
    }
}