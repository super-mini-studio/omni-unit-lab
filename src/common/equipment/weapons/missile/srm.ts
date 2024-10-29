import { TechLvl } from "../../../../units/types/MiscRecordTypes";
import { GenericEquipmentType } from "../../../../units/types/EquipmentType";
import { RangesType } from "../../../../common/types/RangeType";

export interface SRMType extends GenericEquipmentType {
    tech: TechLvl;
    shortName: string;
    range: RangesType;
    damage: string;
    heat: number;
    size: number;
}
export class SRMClass {
    public srmObj: SRMType = {
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

    public srms: SRMType[] = [
        {
            tech: TechLvl.ISONE,
            shortName: "srm2",
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: '2/Msl',
            heat: 2,
            size: 1,
            id: 0,
            name: "SRM 2",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 50,
            contiguous: true
        },
        {
            tech: TechLvl.ISONE,
            shortName: "srm4",
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: '2/Msl',
            heat: 3,
            size: 1,
            id: 1,
            name: "SRM 4",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 25,
            contiguous: true
        },
        {
            tech: TechLvl.ISONE,
            shortName: "srm6",
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: '2/Msl',
            heat: 4,
            size: 2,
            id: 2,
            name: "SRM 6",
            tonnage: 3,
            slots: 2,
            slotsRemaining: 2,
            ammoPerTon: 15,
            contiguous: false
        },
        {
            tech: TechLvl.ISTWO,
            shortName: 'ssrm2',
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: '2/Msl',
            heat: 2,
            size: 1,
            id: 3,
            name: "Streak SRM 2",
            tonnage: 1.5,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 50,
            contiguous: true
        },
        {
            tech: TechLvl.CLANONE,
            shortName: 'csrm2',
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: '2/Msl',
            heat: 2,
            size: 1,
            id: 4,
            name: "Clan SRM 2",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 50,
            contiguous: true
        },
        {
            tech: TechLvl.CLANONE,
            shortName: 'csrm4',
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: "2/Msl",
            heat: 3,
            size: 1,
            id: 5,
            name: "Clan SRM 4",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 25,
            contiguous: true
        },
        {
            tech: TechLvl.CLANONE,
            shortName: 'csrm6',
            range: [0, [1, 3], [4, 6], [7, 9]],
            damage: "2/Msl",
            heat: 4,
            size: 1,
            id: 6,
            name: "Clan SRM 6",
            tonnage: 1.5,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 15,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: 'cssrm2',
            range: [0, [1, 4], [5, 8], [9, 12]],
            damage: "2/Msl",
            heat: 2,
            size: 1,
            id: 7,
            name: "Streak SRM 2",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 50,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cssrm4",
            range: [0, [1, 4], [5, 8], [9, 12]],
            damage: "2/Msl",
            heat: 3,
            size: 1,
            id: 8,
            name: "Streak SRM 4",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 25,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cssrm6",
            range: [0, [1, 4], [5, 8], [9, 12]],
            damage: "2/Msl",
            heat: 4,
            size: 2,
            id: 9,
            name: "Streak SRM 6",
            tonnage: 3,
            slots: 2,
            slotsRemaining: 2,
            ammoPerTon: 15,
            contiguous: true
        }
    ]

    public getSrm(aSrm: string): SRMType {
        const found = this.srms.filter(srm => {
            return srm.shortName == aSrm;
        })

        return found[0];
    }

    public getSrmsByTech(tech:TechLvl): SRMType[] {
        const found = this.srms.filter(srm => {
            return srm.tech == tech;
        })

        return found;
    }
}