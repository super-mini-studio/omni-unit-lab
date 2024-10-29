import {GenericEquipmentType} from '../units/types/EquipmentType'

export class TonnageWatcher {
    public totalTonnage = 0;
    _remaining = 0;
    _tonnageUsed: GenericEquipmentType[] = [];

    public get remaining() {
        return this._remaining;
    }

    public get tonnageUsed() {
        return this._tonnageUsed;
    }

    public updateRemaining(): number {
        let currUsed = 0;
        this._tonnageUsed.forEach((item: GenericEquipmentType) => {
            currUsed += item.tonnage;
        });
        this._remaining = this.totalTonnage - currUsed;

        return this._remaining;
    }

    public addToUsedList(item: GenericEquipmentType): GenericEquipmentType[] {
        this._tonnageUsed.push(item);
        return this._tonnageUsed;
    }

    public removeFromUsedList(index: number): GenericEquipmentType[] {
        return this._tonnageUsed.splice(index, 1);
    }
}