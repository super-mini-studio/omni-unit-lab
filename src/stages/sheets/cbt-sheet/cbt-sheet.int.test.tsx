import { describe, it, expect, beforeEach} from "vitest";
import { CbtSheet } from "./cbt-sheet";
/**
 * 1 when you get to the page, you should be able to click the load button and the native file load dialog should show.
 * 2 when you select a file from the dialog, it should display the contents on the page
 * 3 when a file fails to open, an recoverable error should show
 */

describe('integration: cbt sheet file loading', () => {
    it('should click the load file button and open the native dialog', () => {
        expect(true).toBeFalsy();
    })
});