import { TechLvl } from "../../../../units/types/MiscRecordTypes";
import { GenericEquipmentType } from "../../../../units/types/EquipmentType";
import { RangesType } from "../../../../common/types/RangeType";

export interface LRMType extends GenericEquipmentType {
    tech: TechLvl;
    shortName: string;
    range: RangesType;
    damage: string;
    heat: number;
    size: number;
}

export class LRMClass {
    public LRMObj: LRMType = {
        tech: TechLvl.TECHUNK,
        shortName: "",
        range: [0, [0,0], [0,0], [0,0]],
        damage: "",
        heat: 0,
        size: 0,
        id: 0,
        name: "",
        tonnage: 0, 
        slots: 0,
        slotsRemaining: 0,
        contiguous: false
    }
    
    public lrms: LRMType[] = [
        {
            tech: TechLvl.ISONE,
            shortName: "lrm5",
            range: [6, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 2,
            size: 1,
            id: 0,
            name: "LRM 5",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 24,
            contiguous: false
        },{
            tech: TechLvl.ISONE,
            shortName: "lrm10",
            range: [6, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 4,
            size: 2,
            id: 1,
            name: "LRM 10",
            tonnage: 5,
            slots: 2,
            slotsRemaining: 2,
            ammoPerTon: 12,
            contiguous: true
        },{
            tech: TechLvl.ISONE,
            shortName: "lrm15",
            range: [6, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 5,
            size: 3,
            id: 2,
            name: "LRM 15",
            tonnage: 7,
            slots: 3,
            slotsRemaining: 3,
            ammoPerTon: 8,
            contiguous: true
        },{
            tech: TechLvl.ISONE,
            shortName: "lrm20",
            range: [6, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 6,
            size: 5,
            id: 4,
            name: "LRM 20",
            tonnage: 10,
            slots: 5,
            slotsRemaining: 5,
            ammoPerTon: 6,
            contiguous: true
        },{
            tech: TechLvl.CLANONE,
            shortName: "clrm5",
            range: [0, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 2,
            size: 1,
            id: 5,
            name: "Clan LRM 5",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 24,
            contiguous: false
        },{
            tech: TechLvl.CLANONE,
            shortName: "clrm10",
            range: [0, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 4,
            size: 1,
            id: 6,
            name: "Clan LRM 10",
            tonnage: 2.5,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 12,
            contiguous: false
        },{
            tech: TechLvl.CLANONE,
            shortName: "clrm15",
            range: [0, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 5,
            size: 2,
            id: 7,
            name: "Clan LRM 15",
            tonnage: 3.5,
            slots: 2,
            slotsRemaining: 2,
            ammoPerTon: 8,
            contiguous: true
        },{
            tech: TechLvl.CLANONE,
            shortName: "clrm20",
            range: [0, [1,7], [8,14], [15,21]],
            damage: "1/Msl",
            heat: 6,
            size: 4,
            id: 8,
            name: "Clan LRM 20",
            tonnage: 5,
            slots: 4,
            slotsRemaining: 4,
            ammoPerTon: 6,
            contiguous: true
        },
    ]

    public getLrm(aLrm: string): LRMType {
        const found = this.lrms.filter(lrm => {
            return lrm.shortName == aLrm;
        })

        return found[0];
    }

    public getLrmsByTech(tech:TechLvl): LRMType[] {
        const found = this.lrms.filter(lrm => {
            return lrm.tech == tech;
        })

        return found;
    }
}