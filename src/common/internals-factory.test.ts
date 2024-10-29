import {describe, it, beforeEach, expect} from 'vitest';

import { StructureTypeEnum } from './types/InternalType';
import { TechLvl } from '../units/types/MiscRecordTypes'; 

import { InternalsFactory } from './internals-factory';

describe('Internals Factory Class', () => {
    let fact: InternalsFactory;

    beforeEach(() => {
        fact = new InternalsFactory();
    });

    it('should generate interals for a mech of 55 tons, normal structure, and lvl 1 IS tech', () => {
        const actual = fact.generateInternals(55, StructureTypeEnum.STANDARD, TechLvl.ISONE);

        expect(actual.tonnage).toEqual(5.5);
        expect(actual.HD[1]).toEqual(3);
        expect(actual.CT[1]).toEqual(18);
    });
})