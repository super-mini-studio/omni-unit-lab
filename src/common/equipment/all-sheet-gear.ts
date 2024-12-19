import { sheetBallistic } from "./sheet-weapons/ballistic";
import { sheetPhysical } from "./sheet-weapons/physical";
import { sheetMissile } from "./sheet-weapons/missile";
import { sheetEnergy } from "./sheet-weapons/energy";
import { sheetEquipment } from "./sheet-gear/equipment";

export const allSheetGear = [
  ...sheetBallistic,
  ...sheetPhysical,
  ...sheetMissile,
  ...sheetEnergy,
  ...sheetEquipment,
];
