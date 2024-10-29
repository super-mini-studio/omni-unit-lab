import { TechLvl } from "../../../../units/types/MiscRecordTypes";
import { GenericEquipmentType } from "../../../../units/types/EquipmentType";
import { RangesType } from "../../../../common/types/RangeType";

export interface LaserType extends GenericEquipmentType {
    tech: TechLvl;
    shortName: string;
    range: RangesType;
    damage: string,
    heat: number;
    size: number;
}

export class LaserClass {
    public LaserObj: LaserType = {
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

    public lasers: LaserType[] = [
        {
            tech: TechLvl.ISONE,
            shortName: "flmr",
            range: [0, [0,1], [2,2], [3,3]],
            damage: "2",
            heat: 3,
            size: 1,
            id: 0,
            name: "Flamer",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISONE,
            shortName: "sl",
            range: [0, [0,1], [2,2], [3,3]],
            damage: "3",
            heat: 3,
            size: 1,
            id: 1,
            name: "Small Laser",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISONE,
            shortName: "ml",
            range: [0, [1,3], [4,6], [7,9]],
            damage: "5",
            heat: 3,
            size: 1,
            id: 2,
            name: "Medium Laser",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISONE,
            shortName: "ll",
            range: [0, [1,5], [6,10], [11,15]],
            damage: "8",
            heat: 8,
            size: 2,
            id: 3,
            name: "Large Laser",
            tonnage: 5,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "spl",
            range: [0, [0,1], [2,2], [3,3]],
            damage: "3",
            heat: 2,
            size: 1,
            id: 4,
            name: "Small Pulse Laser",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "mpl",
            range: [0, [1,2], [3,4], [5,6]],
            damage: "6",
            heat: 4,
            size: 1,
            id: 5,
            name: "Medium Pulse Laser",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "lpl",
            range: [0, [1,2], [3,4], [5,6]],
            damage: "9",
            heat: 10,
            size: 2,
            id: 6,
            name: "Large Pulse Laser",
            tonnage: 7,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "ersl",
            range: [0, [1,2], [3,4], [5,5]],
            damage: "3",
            heat: 2,
            size: 1,
            id: 7,
            name: "ER Small Laser",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "erml",
            range: [0, [1,4], [5,8], [9,12]],
            damage: "5",
            heat: 5,
            size: 1,
            id: 8,
            name: "ER Medium Laser",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "erll",
            range: [0, [1,7], [8,14], [15,19]],
            damage: "8",
            heat: 12,
            size: 9,
            id: 9,
            name: "ER Large Laser",
            tonnage: 5,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.CLANONE,
            shortName: "cflmr",
            range: [0, [0,1], [2,2], [3,3]],
            damage: "2",
            heat: 3,
            size: 1,
            id: 10,
            name: "Clan Flamer",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cspl",
            range: [0, [1,2],[3,4],[5,6]],
            damage: "3",
            heat: 2,
            size: 1,
            id: 11,
            name: "Clan Small Pulse Laser",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cmpl",
            range: [0, [1,4],[5,8],[9,12]],
            damage: "7",
            heat: 4,
            size: 1,
            id: 12,
            name: "Clan Medium Pulse Laser",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "clpl",
            range: [0, [1,6],[7,14],[15,20]],
            damage: "10",
            heat: 10,
            size: 2,
            id: 13,
            name: "Clan Large Pulse Laser",
            tonnage: 6,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cersl",
            range: [0, [1,2],[3,4],[5,6]],
            damage: "5",
            heat: 2,
            size: 1,
            id: 14,
            name: "Clan ER Small Laser",
            tonnage: 0.5,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cerml",
            range: [0, [1,5],[6,10],[11,15]],
            damage: "7",
            heat: 5,
            size: 1,
            id: 15,
            name: "Clan ER Medium Laser",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cerll",
            range: [0, [1,8],[9,15],[16,25]],
            damage: "10",
            heat: 12,
            size: 2,
            id: 16,
            name: "Clan ER Large Laser",
            tonnage: 4,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISONE,
            shortName: "ppc",
            range: [3, [1, 6], [7, 12], [13, 18]],
            damage: "10",
            heat: 10,
            size: 3,
            id: 17,
            name: "PPC",
            tonnage: 7,
            slots: 3,
            slotsRemaining: 3,
            contiguous: true
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "erppc",
            range: [0, [1, 7], [8, 14], [15, 23]],
            damage: "10",
            heat: 15,
            size: 3,
            id: 18,
            name: "ER PPC",
            tonnage: 7,
            slots: 3,
            slotsRemaining: 3,
            contiguous: true
        },
        {
            tech: TechLvl.ISTWO,
            shortName: "erppc",
            range: [0, [1,7], [8,14], [15,23]],
            damage: "10",
            heat: 15,
            size: 3,
            id: 19,
            name: "ER PPC",
            tonnage: 7,
            slots: 3,
            slotsRemaining: 3,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTWO,
            shortName: "cerppc",
            range: [3, [1, 6], [7, 12], [13, 18]],
            damage: "15",
            heat: 15,
            size: 2,
            id: 20,
            name: "Clan ER PPC",
            tonnage: 6,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.ISTHREE,
            shortName: 'xpsl',
            range: [0, [1,2], [3,4], [5,5]],
            damage: "3",
            heat: 3,
            size: 1,
            id: 21,
            name: "X-Pulse Small Laser",
            tonnage: 1,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISTHREE,
            shortName: 'xpml',
            range: [0, [1,3], [4,6], [7,9]],
            damage: "6",
            heat: 6,
            size: 1,
            id: 22,
            name: "X-Pulse Medium Laser",
            tonnage: 2,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        },
        {
            tech: TechLvl.ISTHREE,
            shortName: 'xpll',
            range: [0, [1,5], [6,10], [11,15]],
            damage: "9",
            heat: 14,
            size: 2,
            id: 23,
            name: "X-Pulse Large Laser",
            tonnage: 7,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTHREE,
            shortName: 'erlpl',
            range: [0, [1,7], [8,15], [16,23]],
            damage: "10",
            heat: 13,
            size: 3,
            id: 24,
            name: "ER Large Pulse Laser",
            tonnage: 6,
            slots: 3,
            slotsRemaining: 3,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTHREE,
            shortName: 'ermpl',
            range: [0, [1,5], [6,9], [10,14]],
            damage: "7",
            heat: 6,
            size: 2,
            id: 25,
            name: "ER Medium Pulse Laser",
            tonnage: 2,
            slots: 2,
            slotsRemaining: 2,
            contiguous: true
        },
        {
            tech: TechLvl.CLANTHREE,
            shortName: 'erspl',
            range: [0, [1,2], [3,4], [5,6]],
            damage: "5",
            heat: 3,
            size: 1,
            id: 26,
            name: "ER Medium Pulse Laser",
            tonnage: 1.5,
            slots: 1,
            slotsRemaining: 1,
            contiguous: false
        }
    ]

    public getLaser(shortLaserName: string): LaserType {
        const found = this.lasers.filter(laser => {
            return laser.shortName == shortLaserName;
        })

        return found[0]
    }

    public getLasersByTech(tech:TechLvl): LaserType[] {
        const found = this.lasers.filter(laser => {
            return laser.tech == tech;
        })

        return found;
    }
}