import {vi} from 'vitest';
import { mockFireBee } from "./mockFireBee";

export const mockSetFilePathsOut = vi.fn();
export const mockIsLoading = vi.fn();
export const pickerMock = vi.fn();
export const mockFileHandle = {
    name: "Firebee FRB-2E.mtf",
    async getFile() {
        return mockFireBee;
    },
};


  