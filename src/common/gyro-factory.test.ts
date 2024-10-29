import {describe, it, beforeEach, expect} from 'vitest';

import { GyroFactory } from './gyro-factory';

describe('Gyro Factory', () => {
    it('should take engine rating and return whole number for gyro internals and tonnage', () => {
        const fact = new GyroFactory();
        const actual = fact.calculateGyro(250);

        expect(actual).toEqual(3);
    })

    it('should take low end engine rating and return whole number for gyro internals and tonnage', () => {
        const fact = new GyroFactory();
        const actual = fact.calculateGyro(15);

        expect(actual).toEqual(1);
    })
})