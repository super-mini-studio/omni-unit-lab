import { allSheetGear } from "../../common/equipment/all-sheet-gear";

export interface TupleCount {
  values: string[];
  count: number;
}

export interface EquipmentDetails {
  heat: number;
  damage: number;
  ranges: number[]
}

export const countTuples = (tuples: string[][]): TupleCount[] => {
  // Use Map to track counts of stringified tuples
  const countMap = new Map<string, number>();

  // Count occurrences of each tuple
  tuples.forEach((tuple) => {
    const key = JSON.stringify(tuple);
    countMap.set(key, (countMap.get(key) || 0) + 1);
  });

  // Convert Map to array of TupleCount objects
  return Array.from(countMap.entries()).map(([key, count]) => ({
    values: JSON.parse(key),
    count: count,
  }));
};

export const getEquipmentDetails = (equipment: string): EquipmentDetails => {
  // Find matching equipment from all-sheet-gear
  const gearItem = allSheetGear.find((item) => item.names.includes(equipment));

  if (!gearItem) {
    console.log(`Equipment "${equipment}" not found`);
    return {
      heat: 0,
      damage: 0,
      ranges: [-1, -1, -1, -1]
    }
  }

  return {
    heat: gearItem.heat || 0,
    damage: gearItem.damage || 0,
    ranges: gearItem.ranges
  };
};
