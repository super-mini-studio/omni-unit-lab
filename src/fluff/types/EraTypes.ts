export enum EraEnum {
    'Pre-Spaceflight' = 'PSF',
    'Early Spaceflight' = 'ESF',
    'Age of War' = 'AOW',
    'Star League' = 'SL',
    'Early Succession Wars' = 'ESW',
    'Late Succession Wars' = 'LSW',
    'Late Succession Wars - Renaissance' = 'LSWR',
    'Clan Invasion' = 'CI',
    'Civil War' = 'CW',
    'Word of Blake Jihad' = 'JHD',
    'Early Republic' = 'EREP',
    'Late Republic' = 'LREP',
    'Dark Age' = 'DAGE',
    'ilClan' = 'ILC'
}

export type EraType = {
    key: EraEnum;
    name: string;
    end?: string;
    icon: string;
    mulid: number;
}