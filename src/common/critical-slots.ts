import { CritEquipmentDetails, MechCritTable } from "./types/CritTables";

export class CriticalSlots {
    private reroll = 'Roll Again';
    assigned: MechCritTable = {
        HD: ['Life Support', 'Sensors', 'Cockpit', this.reroll, 'Sensors', 'Life Support'],
        CT: ['Fusion Engine', 'Fusion Engine', 'Fusion Engine', 'Gyro', 'Gyro', 'Gyro', 'Gyro', 'Fusion Engine', 'Fusion Engine', 'Fusion Engine', this.reroll, this.reroll],
        LT: [this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll],
        RT: [this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll],
        LA: ['Shoulder', 'Upper Arm Actuator', 'Lower Arm Actuator', 'Hand Actuator', this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll],
        RA: ['Shoulder', 'Upper Arm Actuator', 'Lower Arm Actuator', 'Hand Actuator', this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll],
        LL: ['Hip', 'Upper Leg Actuator', 'Lower Leg Actuator', 'Foot Actuator', this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll],
        RL: ['Hip', 'Upper Leg Actuator', 'Lower Leg Actuator', 'Foot Actuator', this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll, this.reroll],
    }; //todo: add other crit tables for other kinds of units
    unassigned: CritEquipmentDetails[] = [];
    max = [6, 12];
    private removableDefaults = ['Upper Arm Actuator', 'Lower Arm Actuator', 'Hand Actuator'];

    public generateInitCritTable() {
        return this.assigned;
    }

    public isLocAtMax(locArray: string[], isHD: boolean) {
        const max = isHD ? 6 : 12;
        let count = 0;

        locArray.filter((val) => {
            return val !== this.reroll ? count++ : count; 
        })

        const indexArray: number[] = [];
        const remaining = max - count;

        const locSpaceObj = {
            free: remaining,
            atIndexes: indexArray
        };

        locArray.filter((el, i) => {
            if(el === this.reroll) {
                locSpaceObj.atIndexes.push(i);
            }
        });

        return locSpaceObj;
    }

    public setHD(gear: string, atSpot: number[]) {
        const currHD = this.assigned.HD;
        const openSpace = this.isLocAtMax(currHD, true);
        
        if (openSpace.free <= 0) {
            console.log('no free space available. cannot set critical space');
        }

        atSpot.forEach(val => {
            const isFree = openSpace.atIndexes.find(i => i === val);
            const currHDLoc = this.assigned.HD[val];

            this.assigned.HD[val] = isFree ? gear : currHDLoc;
        })
    }

    public setCrits(gear: string, loc: string, atSpot: number[]) {
        const spotsNeeded = atSpot.length;
        const locName = loc as keyof MechCritTable;
        const neededLoc = this.getCritLocation(loc);
        const openSpace = this.isLocAtMax(neededLoc, false);

        if (openSpace.free < spotsNeeded) {
            console.log('no free space available. cannot set critial space');
        }

        atSpot.forEach(val => {
            const isFree = openSpace.atIndexes.find(i => i === val);

            if(isFree !== undefined && isFree >= 0){
                this.assigned[locName][val] = gear;
            }
        })
    }

    public getCritLocation(loc: string): string[] {
        const locName = loc as keyof MechCritTable;

        return this.assigned[locName];
    }

    public getCritTable(): MechCritTable {
        return this.assigned;
    }
}