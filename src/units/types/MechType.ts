import { CBTBipedMechArmor } from "../../common/types/ArmorType";
import { InternalsPlacementsType } from "../../common/types/InternalType";
import { Fluff, MoveTypeEnum, Movements, TechLvl, TransportersEnum, UnitRole } from "./MiscRecordTypes";
import { QuirkTypes } from "./QuirkTypes";
import { WeaponsListType } from "./WeaponsListType";

export enum MechEnum {
    BMECH = 'battlemech',
    IMECH = 'industrialmech',
    OMECH = 'omnimech'
}

export interface MechMassInterface {
    ultralight: [10, 15],
    light: [20, 25, 30, 35],
    medium: [40, 45, 50, 55],
    heavy: [60, 65, 70, 75],
    assault: [80, 85, 90, 95, 100],
    superheavy: [110, 115, 120, 125]
}

export type Mech = {
    blockVersion: number;
    version: string;
    unitType: MechEnum;
    name: string;
    model: string; //need to look at this one...
    mulId: number | undefined;
    year: number;
    originalBuildYear: number;
    type: TechLvl;
    rulesLevel: number;
    role: UnitRole;
    quirks: QuirkTypes[];
    mass: MechMassInterface;
    movementType: MoveTypeEnum;
    turret: string | undefined // this probably needs a type. shows up as Modular:3
    movement: Movements;
    fluff: Fluff;
    unitEquipment: string[];
    chassis: string;
    armor: CBTBipedMechArmor;
    weightClass: number;
    notes: string;
    weapons: WeaponsListType[];
    internalPlacements: InternalsPlacementsType[];
}