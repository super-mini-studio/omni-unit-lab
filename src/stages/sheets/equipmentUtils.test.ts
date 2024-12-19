import React from "react";
import { describe, it, expect, vi } from "vitest";
import { countTuples, getEquipmentDetails } from "./equipmentUtils";

const mockArms = [
    ['SRM 2', 'Right Arm'],
    ['SRM 2', 'Right Arm'],
    ['Small Laser', 'Right Arm']
];

describe('countTuples', () => {
    it('should count the tuples', () => {
        const actual = countTuples(mockArms);
        expect(actual).toEqual([{values: ['SRM 2', 'Right Arm'], count: 2}, {values: ['Small Laser', 'Right Arm'], count: 1}]);
    });
});

describe('getEquipmentDetails', () => {
    it('should be given a string and find the gear for a Medium Laser', () => {
        const actual = getEquipmentDetails('Medium Laser');
        expect(actual.heat).toEqual(3);
        expect(actual.damage).toEqual(5);
    });
    it('should be given something not in gear lookups and return 0s or -1s', () => {
        const actual = getEquipmentDetails('Hat Rack');
        expect(actual.damage).toEqual(0);
        expect(actual.ranges).toStrictEqual([-1, -1, -1, -1])
    })
})