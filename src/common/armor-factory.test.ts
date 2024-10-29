import {describe, it, beforeEach, expect} from 'vitest';

import { ArmorFactory } from './armor-factory';
import { ArmorTypeEnum } from './types/ArmorType';
import { TechLvl } from '../units/types/MiscRecordTypes';


describe('armor factory tests', () => {
    let fact: ArmorFactory;

    beforeEach(() => {
        fact = new ArmorFactory();
    });

    it('should generate armor object for tonnage of 45, standard armor, and tech level 1', () => {
        const actual = fact.generateArmor(45, ArmorTypeEnum['STANDARD'], TechLvl['ISONE']);
        
        expect(actual.armorFactor).toEqual(720);
        expect(actual.max).toEqual(153);
        expect(actual.armorInternalsCritMax).toEqual(0);
        expect(actual.CT[1]).toEqual(28);
    })

    it('should try a tonnage out of valid range and return a lot of zeros', () => {
        const actual = fact.generateArmor(180, ArmorTypeEnum['STANDARD'], TechLvl['ISONE']);

        expect(actual.armorFactor).toEqual(2880);
        expect(actual.max).toEqual(0);
        expect(actual.armorInternalsCritMax).toEqual(0);
        expect(actual.CT[1]).toEqual(0);
    });

    it('should assign available armor points to front and back of center torso and share the same pool of point', () => {
        fact.generateArmor(50, ArmorTypeEnum['STANDARD'], TechLvl['ISONE']);

        fact.setRearCenter(10);
        fact.setCenter(22);

        expect(fact.armor.CT[0]).toEqual(22);
        expect(fact.armor.CT[1]).toEqual(32);
    });

    it('should try to set armor above max on front and stay at max', () => {
        fact.generateArmor(50, ArmorTypeEnum['STANDARD'], TechLvl['ISONE']);

        fact.setRearCenter(11);
        fact.setCenter(23);

        expect(fact.armor.CT[0]).toEqual(21);
        expect(fact.armor.RTC[0]).toEqual(11);
    })
});