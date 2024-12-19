export interface SheetWeapon {
  names: string[];
  abbr: string;
  heat: number;
  damage: number;
  ranges: number[];
}

// ISMML3 6/0, 14/6 21/9
// ISMML5 6/0, 14/6 21/9
// ISMML7 6/0, 14/6 21/9
// ISMML9 6/0, 14/6 21/9

export const sheetMissile: SheetWeapon[] = [
  {
    names: ["SRM 2", "ISSRM2", "CLSRM2"],
    abbr: "srm2",
    heat: 2,
    damage: 2,
    ranges: [0, 3, 6, 9],
  },
  {
    names: ["SRM 4", "ISSRM4", "CLSRM4"],
    abbr: "srm4",
    heat: 3,
    damage: 2,
    ranges: [0, 3, 6, 9],
  },
  {
    names: ["SRM 6", "ISSRM6", "CLSRM6"],
    abbr: "srm6",
    heat: 4,
    damage: 2,
    ranges: [0, 3, 6, 9],
  },
  {
    names: ["Streak SRM 2", "ISStreakSRM2"],
    abbr: "ssrm2",
    heat: 2,
    damage: 2,
    ranges: [0, 3, 6, 9],
  },
  {
    names: ["Streak SRM 4", "ISStreakSRM4"],
    abbr: "ssrm4",
    heat: 3,
    damage: 2,
    ranges: [0, 3, 6, 9],
  },
  {
    names: ["Streak SRM 6", "ISStreakSRM6"],
    abbr: "ssrm6",
    heat: 4,
    damage: 2,
    ranges: [0, 3, 6, 9],
  },
  {
    names: ["Clan Streak SRM 2", "CLStreakSRM2"],
    abbr: "cslrm2",
    heat: 2,
    damage: 2,
    ranges: [0, 3, 8, 12],
  },
  {
    names: ["Clan Streak SRM 4", "CLStreakSRM4"],
    abbr: "cslrm4",
    heat: 3,
    damage: 2,
    ranges: [0, 3, 8, 12],
  },
  {
    names: ["Clan Streak SRM 6", "CLStreakSRM6"],
    abbr: "cslrm6",
    heat: 4,
    damage: 2,
    ranges: [0, 3, 8, 12],
  },
  {
    names: ["LRM 5", "ISLRM5"],
    abbr: "lrm5",
    heat: 2,
    damage: 1,
    ranges: [6, 7, 14, 21],
  },
  {
    names: ["LRM 10", "ISLRM10"],
    abbr: "lrm10",
    heat: 4,
    damage: 1,
    ranges: [6, 7, 14, 21],
  },
  {
    names: ["LRM 15", "ISLRM15"],
    abbr: "lrm15",
    heat: 5,
    damage: 1,
    ranges: [6, 7, 14, 21],
  },
  {
    names: ["LRM 20", "ISLRM20"],
    abbr: "lrm20",
    heat: 6,
    damage: 1,
    ranges: [6, 7, 14, 21],
  },
  {
    names: ["ATM 3", "ISATM3"],
    abbr: "atm3",
    heat: 2,
    damage: 2,
    ranges: [4, 5, 10, 15],
  },
  {
    names: ["ATM 6", "ISATM6"],
    abbr: "atm6",
    heat: 4,
    damage: 2,
    ranges: [4, 5, 10, 15],
  },
  {
    names: ["ATM 9", "ISATM9"],
    abbr: "atm9",
    heat: 6,
    damage: 2,
    ranges: [4, 5, 10, 15],
  },
  {
    names: ["ATM 12", "ISATM12"],
    abbr: "atm12",
    heat: 8,
    damage: 2,
    ranges: [4, 5, 10, 15],
  },
  {
    names: ["MRM 20", "ISMRM20"],
    abbr: "mrm20",
    heat: 6,
    damage: 1,
    ranges: [0, 3, 8, 15],
  },
  {
    names: ["MRM 30", "ISMRM30"],
    abbr: "mrm30",
    heat: 10,
    damage: 1,
    ranges: [0, 3, 8, 15],
  },
  {
    names: ["MRM 40", "ISMRM40"],
    abbr: "mrm40",
    heat: 12,
    damage: 1,
    ranges: [0, 3, 8, 15],
  },
  {
    names: ["Rocket Launcher 1", "ISRL1"],
    abbr: "rl1",
    heat: 0,
    damage: 1,
    ranges: [0, 3, 7, 12],
  },
  {
    names: ["Rocket Launcher 2", "ISRL2"],
    abbr: "rl2",
    heat: 0,
    damage: 1,
    ranges: [0, 3, 7, 12],
  },
  {
    names: ["Rocket Launcher 10", "ISRL10"],
    abbr: "rl10",
    heat: 3,
    damage: 1,
    ranges: [0, 5, 11, 18],
  },
  {
    names: ["Rocket Launcher 15", "ISRL15"],
    abbr: "rl15",
    heat: 4,
    damage: 1,
    ranges: [0, 5, 11, 18],
  },
];
