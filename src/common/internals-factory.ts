import { TechLvl } from "../units/types/MiscRecordTypes";
import { LocationsEnum, StructureTypeEnum, CBTBipedMechInternal } from "./types/InternalType";
import { InternalConstantDetails, InternalsTable } from "./types/InternalConstants";

export class InternalsFactory{
    internals: CBTBipedMechInternal = {
        structureType: StructureTypeEnum.STANDARD,
        tonnage: 0,
        LA: [0,0],
        RA: [0,0],
        LT: [0,0],
        RT: [0,0],
        CT: [0,0],
        HD: [0,3],
        LL: [0,0],
        RL: [0,0]
    }

    defaultNotFoundInterals: InternalConstantDetails = {
        internalTonnage: 0, 
        HD: 0,
        CT: 0,
        LT: 0,
        RT: 0,
        LA: 0,
        RA: 0,
        LL: 0,
        RL: 0, 
        maxArmor: 0
    }

    public set setTonnage(tonnage: number) {
        this.internals.tonnage = tonnage;
    }

    public set setStructureType(structure: StructureTypeEnum) {
        this.internals.structureType = structure;
    }

    public set setLAUsed(n: number){
        this.internals.LA[0] = n;
    }

    public set setRAUsed(n: number){
        this.internals.RA[0] = n;
    }

    public set setHDUsed(n: number){
        this.internals.HD[0] = n;
    }

    public set setCTUsed(n: number){
        this.internals.CT[0] = n;
    }

    public set setLTUsed(n: number){
        this.internals.LT[0] = n;
    }

    public set setRTUsed(n: number){
        this.internals.RT[0] = n;
    }

    public set setLLUsed(n: number){
        this.internals.LL[0] = n;
    }

    public set setRLUsed(n: number){
        this.internals.RL[0] = n;
    }

    private internalTonnageFromMech(tons: number): number {
        return tons * 0.1;
    }

    getStructurePips(tons: number, loc: LocationsEnum): number {
        const locKeyStr = Object.keys(LocationsEnum)[Object.values(LocationsEnum).indexOf(loc)];
        const inEntry = InternalsTable().get(tons.toString()) || this.defaultNotFoundInterals;
        const hasProp = Object.prototype.hasOwnProperty.call(inEntry, locKeyStr)
        const entryNumber = hasProp ? inEntry[locKeyStr as keyof typeof inEntry] : 0;

        return entryNumber
    }

    public generateInternals(mechTonnage: number, structureType: StructureTypeEnum, tech: TechLvl): CBTBipedMechInternal {
        this.internals.tonnage = this.internalTonnageFromMech(mechTonnage);
        this.internals.structureType = structureType;
        this.internals.LA = [0, this.getStructurePips(mechTonnage, LocationsEnum.LA)];
        this.internals.RA = [0, this.getStructurePips(mechTonnage, LocationsEnum.RA)];
        this.internals.HD = [0, 3];
        this.internals.CT = [0, this.getStructurePips(mechTonnage, LocationsEnum.CT)];
        this.internals.RT = [0, this.getStructurePips(mechTonnage, LocationsEnum.RT)];
        this.internals.LT = [0, this.getStructurePips(mechTonnage, LocationsEnum.LT)];
        this.internals.RL = [0, this.getStructurePips(mechTonnage, LocationsEnum.RL)];
        this.internals.LL = [0, this.getStructurePips(mechTonnage, LocationsEnum.LL)];

        return this.internals;
    }
}
