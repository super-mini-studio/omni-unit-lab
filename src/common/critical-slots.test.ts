import {describe, it, beforeEach, expect} from 'vitest';

import { CriticalSlots } from './critical-slots';

describe('critical slot class tests', () => {
    let critClass: CriticalSlots;

    beforeEach(() => {
        critClass = new CriticalSlots();
    })

    it('should generate default crit table', () => {
        const actual = critClass.generateInitCritTable();

        expect(actual.HD.length).toEqual(6);
        expect(actual.CT.length).toEqual(12);
        expect(actual.LT.every(item => item === 'Roll Again'));
    });

    it('should check if location has any free spaces left', () => {
        const defaultTable = critClass.generateInitCritTable();
        const actual = critClass.isLocAtMax(defaultTable.CT, false);

        expect(actual.free).toEqual(2);
        expect(actual.atIndexes[0]).toEqual(10);
        expect(actual.atIndexes[1]).toEqual(11);
    });

    it('should check if head location has any free spaces left', () => {
        const defaultTable = critClass.generateInitCritTable();
        const actual = critClass.isLocAtMax(defaultTable.HD, true);

        expect(actual.free).toEqual(1);
        expect(actual.atIndexes[0]).toEqual(3);
    });

    it('should be able to set the free space in the head', () => {
        critClass.setHD('Small Laser', [3]);

        const actual = critClass.getCritLocation('HD');

        expect(actual[3]).toBe('Small Laser');
    })

    it('should add new equipment to a specified loc and index', () => {
        critClass.setCrits('Small Laser', 'RA', [4]);

        const actual = critClass.getCritLocation('RA');

        expect(actual[4]).toBe('Small Laser');
    });

    it('should add new multislot equipment at specified loc and indecies', () => {
        critClass.setCrits('Double Heat Sink', 'RT', [0, 1, 2]);

        const actual = critClass.getCritLocation('RT');

        expect(actual[0]).toBe('Double Heat Sink');
        expect(actual[1]).toBe('Double Heat Sink');
        expect(actual[2]).toBe('Double Heat Sink');
    })

    it('should get any crit table location when loc abbr passed in', () => {
        const actual = critClass.getCritLocation('LL');

        expect(actual[0]).toBe('Hip');
    });
});