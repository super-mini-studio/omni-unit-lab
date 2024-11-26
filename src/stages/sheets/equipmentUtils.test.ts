import React from "react";
import { describe, it, expect, vi } from "vitest";
import { countTuples } from "./equipmentUtils";

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