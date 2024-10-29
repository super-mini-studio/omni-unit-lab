import { BAChassisEnum, Fluff, MoveTypeEnum, Movements, TechLvl, TransportersEnum, UnitRole } from "./MiscRecordTypes";

export type BattleArmor = {
    blockVersion: number;
    version: string;
    unitType: 'BattleArmor';
    name: string;
    model: string; //need to look at this one...
    mulId: number | undefined;
    year: number;
    originalBuildYear: number;
    type: TechLvl;
    role: UnitRole;
    movementType: MoveTypeEnum;
    transporters: TransportersEnum | undefined;
    turret: string | undefined // this probably needs a type. shows up as Modular:3
    movement: Movements;
    fluff: Fluff;
    unitEquipment: string[];
    chassis: BAChassisEnum;
    armor: number;
    armorType: number;
    armorTech: number;
    trooperCount: number;
    weightClass: number;
    notes: string;
}