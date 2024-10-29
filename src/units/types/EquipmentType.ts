export type GenericEquipmentType = {
    id: number;
    name: string;
    tonnage: number;
    slots: number;
    slotsRemaining: number;
    ammoPerTon?: number;
    contiguous: boolean;
}
