import {describe, it, beforeEach, expect} from 'vitest';

import { TonnageWatcher } from './tonnage-watcher';

describe('Tonnage Watcher', () => {
    let tWatcher: TonnageWatcher;

    beforeEach(() => {
        tWatcher = new TonnageWatcher();
    })

    it('should give remaining tonnage on a 50 ton mech after gyro and engine added', () => {
        tWatcher.totalTonnage = 50;
        tWatcher.addToUsedList({
            id: 1,
            name: "engine",
            tonnage: 10,
            slots: 6,
            slotsRemaining: 6,
            contiguous: false
        })
        tWatcher.addToUsedList({
            id: 2,
            name: "gyro",
            tonnage: 3,
            slots: 3,
            slotsRemaining: 3,
            contiguous: true
        })

        const actual = tWatcher.updateRemaining();

        expect(actual).toEqual(37);
    })
})