export type InternalCritSpaceTuple = [
    string,
    number
]

export const InternalCritSpaceDefaults: InternalCritSpaceTuple[] = [
    ['HD', 1],
    ['CT', 2],
    ['LT', 12],
    ['RT', 12],
    ['LA', 8],
    ['RA', 8],
    ['LL', 2],
    ['RL', 2],
]

export type InternalConstantDetails = {
    internalTonnage: number;
    HD: number;
    CT: number;
    LT: number;
    RT: number;
    LA: number;
    RA: number;
    LL: number;
    RL: number;
    maxArmor: number;
}

export const InternalsTable = (): Map<string, InternalConstantDetails> => {
    const inMap = new Map<string, InternalConstantDetails>();

    inMap.set('0', {
        internalTonnage: 0, 
        HD: 0,
        CT: 0,
        LT: 0,
        RT: 0,
        LA: 0,
        RA: 0,
        LL: 0,
        RL: 0,
        maxArmor: 0
    });
    inMap.set('20', {
        internalTonnage: 2, 
        HD: 3,
        CT: 6,
        LT: 5,
        RT: 5,
        LA: 3,
        RA: 3,
        LL: 4,
        RL: 4,
        maxArmor: 69
    });
    inMap.set('25', {
        internalTonnage: 2.5, 
        HD: 3,
        CT: 8,
        LT: 6,
        RT: 6,
        LA: 4,
        RA: 4,
        LL: 6,
        RL: 6,
        maxArmor: 89
    });
    inMap.set('30', {
        internalTonnage: 3, 
        HD: 3,
        CT: 10,
        LT: 7,
        RT: 7,
        LA: 5,
        RA: 5,
        LL: 7,
        RL: 7,
        maxArmor: 105
    });
    inMap.set('35', {
        internalTonnage: 3.5, 
        HD: 3,
        CT: 11,
        LT: 8,
        RT: 8,
        LA: 6,
        RA: 6,
        LL: 8,
        RL: 8,
        maxArmor: 119
    });
    inMap.set('40', {
        internalTonnage: 4, 
        HD: 3,
        CT: 12,
        LT: 10,
        RT: 10,
        LA: 6,
        RA: 6,
        LL: 10,
        RL: 10,
        maxArmor: 137
    });
    inMap.set('45', {
        internalTonnage: 4.5, 
        HD: 3,
        CT: 14,
        LT: 11,
        RT: 11,
        LA: 7,
        RA: 7,
        LL: 11,
        RL: 11,
        maxArmor: 153
    });
    inMap.set('50', {
        internalTonnage: 5, 
        HD: 3,
        CT: 16,
        LT: 12,
        RT: 12,
        LA: 8,
        RA: 8,
        LL: 12,
        RL: 12,
        maxArmor: 169
    });
    inMap.set('55', {
        internalTonnage: 5.5, 
        HD: 3,
        CT: 18,
        LT: 13,
        RT: 13,
        LA: 9,
        RA: 9,
        LL: 13,
        RL: 13,
        maxArmor: 185
    });
    inMap.set('60', {
        internalTonnage: 6, 
        HD: 3,
        CT: 20,
        LT: 14,
        RT: 14,
        LA: 10,
        RA: 10,
        LL: 14,
        RL: 14,
        maxArmor: 201
    });
    inMap.set('65', {
        internalTonnage: 6.5, 
        HD: 3,
        CT: 21,
        LT: 15,
        RT: 15,
        LA: 10,
        RA: 10,
        LL: 15,
        RL: 15,
        maxArmor: 211
    });
    inMap.set('70', {
        internalTonnage: 7, 
        HD: 3,
        CT: 22,
        LT: 15,
        RT: 15,
        LA: 11,
        RA: 11,
        LL: 15,
        RL: 15,
        maxArmor: 217
    });
    inMap.set('75', {
        internalTonnage: 7.5, 
        HD: 3,
        CT: 23,
        LT: 16,
        RT: 16,
        LA: 12,
        RA: 12,
        LL: 16,
        RL: 16,
        maxArmor: 231
    });
    inMap.set('80', {
        internalTonnage: 8, 
        HD: 3,
        CT: 25,
        LT: 17,
        RT: 17,
        LA: 13,
        RA: 13,
        LL: 17,
        RL: 17,
        maxArmor: 247
    });
    inMap.set('85', {
        internalTonnage: 8.5, 
        HD: 3,
        CT: 27,
        LT: 18,
        RT: 18,
        LA: 14,
        RA: 14,
        LL: 18,
        RL: 18,
        maxArmor: 263
    });
    inMap.set('90', {
        internalTonnage: 9, 
        HD: 3,
        CT: 29,
        LT: 19,
        RT: 19,
        LA: 15,
        RA: 15,
        LL: 19,
        RL: 19,
        maxArmor: 279
    });
    inMap.set('95', {
        internalTonnage: 9.5, 
        HD: 3,
        CT: 30,
        LT: 20,
        RT: 20,
        LA: 16,
        RA: 16,
        LL: 20,
        RL: 20,
        maxArmor: 293
    });
    inMap.set('100', {
        internalTonnage: 10, 
        HD: 3,
        CT: 31,
        LT: 21,
        RT: 21,
        LA: 17,
        RA: 17,
        LL: 20,
        RL: 20,
        maxArmor: 307
    });

    return inMap;
}
