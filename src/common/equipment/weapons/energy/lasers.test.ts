import {describe, it, beforeEach, expect} from 'vitest';

import { LaserClass } from './lasers';
import { TechLvl } from '../../../../units/types/MiscRecordTypes';

describe('laser class tests', () => {
    let laser: LaserClass;

    beforeEach(() => {
        laser = new LaserClass();
    });

    it('should get lvl 1 medium laser', () => {
        const actual = laser.getLaser('ml');

        expect(actual.heat).toEqual(3);
        expect(actual.id).toEqual(2)
    });

    it('should get all clan lvl 2 energy weapons', () => {
        const actual = laser.getLasersByTech(TechLvl.CLANTWO);

        expect(actual.length).toEqual(7);
        expect(actual[2].id).toEqual(13);
    })
});