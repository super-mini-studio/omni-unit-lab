type NameChange = {
    name: string;
    when: string;
}

export enum FactionRating {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F',
    'Provisional Garrison' = 'PG',
    'Solahma' = 'SOL',
    'Front Line' = 'FL',
    'Second Line' = 'SL',
    'Keshik' = 'KESH'
}

export type YearTuple = [
    string, string
]

export type FactionType = {
    key: string;
    subKey: string;
    name: string;
    isMinor: boolean;
    isClan: boolean;
    isPeriphery: boolean;
    years: YearTuple[];
    nameChange?: NameChange;
    rating?: FactionRating[];
    parent?: string[];
}