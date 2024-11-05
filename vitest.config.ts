import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

const setupFiles = ['./setup-tests.ts'];

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles,
        include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        reporters: ['verbose'],
    }
})