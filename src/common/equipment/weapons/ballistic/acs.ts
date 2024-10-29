import { TechLvl } from "../../../../units/types/MiscRecordTypes";
import { GenericEquipmentType } from "../../../../units/types/EquipmentType";
import { RangesType } from "../../../../common/types/RangeType";

export interface ACType extends GenericEquipmentType {
    tech: TechLvl;
    shortName: string;
    range: RangesType;
    damage: string,
    heat: number;
    size: number;
}

export class BallisticClass { 
    public bObj: ACType = {
        tech: TechLvl.TECHUNK,
        shortName: '',
        range: [0, [0,0], [0,0], [0,0]],
        damage: '',
        heat: 0,
        size: 0,
        id: 0,
        name: '',
        tonnage: 0,
        slots: 0,
        slotsRemaining: 0,
        contiguous: false
    }

    public ballistics: ACType[] = [
        {
            tech: TechLvl.ISONE,
            shortName: "ac2",
            range: [4, [1,8], [9,16], [17,24]],
            damage: "2",
            heat: 1,
            size: 1,
            id: 0,
            name: "Autocannon 2",
            tonnage: 6,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISONE,
            shortName: "ac5",
            range: [3, [1,6], [7,12], [13,18]],
            damage: "5",
            heat: 1,
            size: 4,
            id: 1,
            name: "Autocannon 5",
            tonnage: 8,
            slots: 4,
            slotsRemaining: 4,
            contiguous: true
        },
        {
            tech: TechLvl.ISONE,
            shortName: "ac10",
            range: [0, [1,5], [6,10], [11,15]],
            damage: "10",
            heat: 3,
            size: 7,
            id: 2,
            name: "Autocannon 10",
            tonnage: 12,
            slots: 7,
            slotsRemaining: 7,
            ammoPerTon: 10,
            contiguous: true
        },
        {
            tech: TechLvl.ISONE,
            shortName: "ac20",
            range: [0, [1,3], [4,6], [7,9]],
            damage: "20",
            heat: 7,
            size: 10,
            id: 3,
            name: "Autocannon 20",
            tonnage: 14,
            slots: 10,
            slotsRemaining: 10,
            ammoPerTon: 5,
            contiguous: true
        },
        {
            tech: TechLvl.ISONE,
            shortName: "mg",
            range: [0, [1,1], [2,2], [3,3]],
            damage: "2",
            heat: 0,
            size: 1,
            id: 4,
            name: "Machine Gun",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 200,
            contiguous: false
        },
        {
            tech: TechLvl.ISONE,
            shortName: "flmrv",
            range: [0, [1,1], [2,2], [3,3]],
            damage: "2",
            heat: 3,
            size: 1,
            id: 5,
            name: "Flamer (Vehicle)",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 20,
            contiguous: false
        },
        {
            tech: TechLvl.ISTWO,
            shortName: 'gr',
            range: [2, [1,7], [8,15], [16,22]],
            damage: "15",
            heat: 1,
            size: 7,
            id: 6,
            name: 'Gauss Rifle',
            tonnage: 15,
            slots: 7,
            slotsRemaining: 7,
            ammoPerTon: 8,
            contiguous: true
        },
        {
            tech: TechLvl.CLANONE,
            shortName: "cmg",
            range: [0, [1,1], [2,2], [3,3]],
            damage: "2",
            heat: 0,
            size: 1,
            id: 7,
            name: "Clan Machine Gun",
            tonnage: 0.25,
            slots: 1,
            slotsRemaining: 1,
            ammoPerTon: 200,
            contiguous: false
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: 'cgr',
            range: [2, [1,7], [8,15], [16,22]],
            damage: "15",
            heat: 1,
            size: 6,
            id: 8,
            name: 'Clan Gauss Rifle',
            tonnage: 12,
            slots: 6,
            slotsRemaining: 6,
            ammoPerTon: 8,
            contiguous: true
        }
    ];

    
}