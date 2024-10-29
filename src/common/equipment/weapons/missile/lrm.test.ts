import {describe, it, beforeEach, expect} from 'vitest';

import { LRMClass } from './lrm';
import { TechLvl } from '../../../../units/types/MiscRecordTypes';

describe('lrmclass tests', () => {
    let lrm: LRMClass;

    beforeEach(() => {
        lrm = new LRMClass();
    });

    it('should get is lvl 1 lrm4', () => {
        const actual = lrm.getLrm('lrm5');

        expect(actual.heat).toEqual(2);
        expect(actual.id).toEqual(0);
    });

    it('should get clan lvl 1 lrm20', () => {
        const actual = lrm.getLrm('clrm20');

        expect(actual.heat).toEqual(6);
        expect(actual.id).toEqual(8)
    });

    it('should get all is tech one lrms', () => {
        const actual = lrm.getLrmsByTech(TechLvl.ISONE);

        expect(actual.length).toEqual(4);
        expect(actual[0].id).toEqual(0)
    })
});