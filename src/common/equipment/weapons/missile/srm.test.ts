import {describe, it, beforeEach, expect} from 'vitest';

import { SRMClass } from './srm';
import { TechLvl } from '../../../../units/types/MiscRecordTypes';

describe('srmclass tests', () => {
    let srm: SRMClass;

    beforeEach(() => {
        srm = new SRMClass();
    });

    it('should get is lvl 1 srm4', () => {
        const actual = srm.getSrm('srm4');

        expect(actual.heat).toEqual(3);
        expect(actual.id).toEqual(1);
    });

    it('should get clan lvl 2 ssrm6', () => {
        const actual = srm.getSrm('cssrm6');

        expect(actual.heat).toEqual(4);
        expect(actual.id).toEqual(9)
    });

    it('should get all is tech two srms', () => {
        const actual = srm.getSrmsByTech(TechLvl.ISTWO);

        expect(actual.length).toEqual(1);
        expect(actual[0].id).toEqual(3)
    })
});