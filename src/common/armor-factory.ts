import { locInternalTuple } from "./types/InternalType";
import { AmountUsedMaxTuple, ArmorTypeEnum, CBTBipedMechArmor } from "./types/ArmorType";
import { TechLvl } from "../units/types/MiscRecordTypes";
import { InternalConstantDetails, InternalsTable } from "./types/InternalConstants";

export class ArmorFactory {
    type = ArmorTypeEnum.STANDARD;
    armorInternals: locInternalTuple[] = [];
    armor: CBTBipedMechArmor = {
        armorType: this.type,
        armorInternals: this.armorInternals,
        armorInternalsCritMax: 0,
        tonnage: 0,
        armorFactor: 0,
        LA: [0,0],
        RA: [0,0],
        LT: [0,0],
        RT: [0,0],
        CT: [0,0],
        HD: [0,9],
        LL: [0,0],
        RL: [0,0],
        RTL: [0,0],
        RTR: [0,0],
        RTC: [0,0],
        max: 0
    };

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
    
    private getMaxArmor(tonnage: string): number {
        const max = InternalsTable().get(tonnage) || this.defaultNotFoundInterals;
        const hasMax = Object.prototype.hasOwnProperty.call(max, 'maxArmor');

        return hasMax ? max['maxArmor' as keyof typeof max] : 0;
    }

    private getMaxForLoc(tonnage: string, loc: string): number {
        const valuesForTonnage = InternalsTable().get(tonnage) || this.defaultNotFoundInterals;
        const hasInternalLocValue = Object.prototype.hasOwnProperty.call(valuesForTonnage, loc);
        const internalVal = hasInternalLocValue ? valuesForTonnage[loc as keyof typeof valuesForTonnage] : 0;

        return internalVal * 2;
    }

    private armorInternalsDecision(type: ArmorTypeEnum, tech: TechLvl): number {
        if(type == ArmorTypeEnum.FERRO && tech == TechLvl.CLANONE){
            return 7;
        } else if(type == ArmorTypeEnum.FERRO && tech == TechLvl.ISTWO){
            return 14;
        }

        return 0;
    }

    public armorFactorMath(tonnage:number, type: ArmorTypeEnum, tech: TechLvl): number {
        let atmodifier = 1;
        if (type == ArmorTypeEnum.FERRO && tech == TechLvl.CLANONE){
            atmodifier = 1.2;
        } else if (type == ArmorTypeEnum.FERRO && tech == TechLvl.ISTWO){
            atmodifier = 1.12;
        }

        return tonnage * 16 * atmodifier;
    }

    public set setType(armorType: ArmorTypeEnum) {
        this.type = armorType;
    }

    public generateArmor(tonnage: number, type: ArmorTypeEnum, tech: TechLvl): CBTBipedMechArmor {
        const tonStr = tonnage.toString();
        this.armor.armorFactor = this.armorFactorMath(tonnage, type, tech);
        this.type = type;
        this.armorInternals = [];
        this.armor.armorInternalsCritMax = this.armorInternalsDecision(type, tech);
        this.armor.HD = [0, 9];
        this.armor.CT = [0, this.getMaxForLoc(tonStr, 'CT')];
        this.armor.RT = [0, this.getMaxForLoc(tonStr, 'RT')];
        this.armor.LT = [0, this.getMaxForLoc(tonStr, 'LT')];
        this.armor.RA = [0, this.getMaxForLoc(tonStr, 'RA')];
        this.armor.LA = [0, this.getMaxForLoc(tonStr, 'LA')];
        this.armor.LL = [0, this.getMaxForLoc(tonStr, 'LL')];
        this.armor.RL = [0, this.getMaxForLoc(tonStr, 'RL')];
        this.armor.RTL = [0, this.getMaxForLoc(tonStr, 'CT')];
        this.armor.RTR = [0, this.getMaxForLoc(tonStr, 'RT')];
        this.armor.RTC = [0, this.getMaxForLoc(tonStr, 'LT')];
        this.armor.max = this.getMaxArmor(tonStr);

        return this.armor;
    }

    public getArmorDetails(): CBTBipedMechArmor {
        return this.armor;
    }

    public checkMax(newVal: number, oldVal: number, max: number, back = 0): number {
        const combined = newVal + back;
        
        if(combined <= max) {
            return newVal;
        } else {
            const diff = combined - max;
            
            return newVal - diff;
        }
    }

    public set setHead(a: number) {
        this.armor.HD[0] = a < this.armor.HD[1] ? a : this.armor.HD[0];
    }
    
    public setCenter(a: number) {
        const currFront = this.armor.CT[0];
        const max = this.armor.CT[1];
        const currRear = this.armor.RTC[0];

        this.armor.CT[0] = this.checkMax(a, currFront, max, currRear)
    }

    public setRearCenter(a: number) {
        const currFront = this.armor.CT[0];
        const max = this.armor.CT[1];
        const currRear = this.armor.RTC[0];

        this.armor.RTC[0] = this.checkMax(a, currRear, max, currFront);
    }
    
    public setRightTorso(a: number) {
        const currRT = this.armor.RT[0];
        const currRear = this.armor.RTR[0];
        const combined = currRT + currRear;

        this.armor.RT[0] = a < combined ? a : currRT;
    }

    public setRearRightTorso(a: number) {
        const currRT = this.armor.RT[0];
        const currRear = this.armor.RTR[0];
        const combined = currRT + currRear;

        this.armor.RTR[0] = a < combined ? a : currRear;
    }

    public setLeftTorso(a: number) {
        const currLT = this.armor.LT[0];
        const currRear = this.armor.RTL[0];
        const combined = currLT + currRear;

        this.armor.LT[0] = a < combined ? a : currLT;
    }

    public setRearLeftTorso(a: number) {
        const currLT = this.armor.LT[0];
        const currRear = this.armor.RTL[0];
        const combined = currLT + currRear;

        this.armor.RTL[0] = a < combined ? a : currRear;
    }

    public setLeftArm(a: number) {
        const currLA = this.armor.LA[0];

        this.armor.LT[0] = a < currLA ? a : currLA;
    }

    public setRightArm(a: number) {
        const currRA = this.armor.RA[0];

        this.armor.LT[0] = a < currRA ? a : currRA;
    }

    public setLeftLeg(a: number) {
        const currLL = this.armor.LL[0];

        this.armor.LT[0] = a < currLL ? a : currLL;
    }

    public setRightLet(a: number) {
        const currRL = this.armor.RL[0];

        this.armor.RL[0] = a < currRL ? a : currRL;
    }
}                                                                                                                                                                                   