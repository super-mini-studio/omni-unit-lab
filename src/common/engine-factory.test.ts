import {describe, it, beforeEach, expect} from 'vitest';

import { EngineFactory } from './engine-factory';
import { engineTypes } from './types/EngineConstants';
import { TechLvl } from '../units/types/MiscRecordTypes';

describe('engine factory tests', () => {
    let fact: EngineFactory;

    beforeEach(() => {
        fact = new EngineFactory();
    })

    it('should generate an engine for walking speed of 4 and tonnage of 25', () => {
        const actual = fact.calculateEngine(4, 25, engineTypes['NORMAL'], TechLvl['ISONE']);

        expect(actual.rating).toEqual(100);
        expect(actual.walking).toEqual(4);
        expect(actual.engineWeight).toEqual(3);
        expect(actual.engineHeatSinks).toEqual([4, 6]);
    });

    it('should generate extra internals for inner sphere xl engine', () => {
        const actual = fact.calculateEngine(4, 45, engineTypes['XL'], TechLvl['ISTWO']);
        
        expect(actual.engineInternals.length).toBe(3);
        expect(actual.engineInternals[1][1]).toEqual(3);
    });

    it('should generate extra internals for clan xl engine', () => {
        const actual = fact.calculateEngine(4, 45, engineTypes['XL'], TechLvl['CLANTWO']);
        
        expect(actual.engineInternals.length).toBe(3);
        expect(actual.engineInternals[1][1]).toEqual(2);
    });
})