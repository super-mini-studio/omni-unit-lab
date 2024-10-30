import {defineConfig} from 'vite';

export default defineConfig(() => {
    return {
        outDir: 'static',
        server: {},
        build: {
            rollupOptions: {
                external: [
                    'react',
                    'node:fs',
                    'node:path'
                ],
                output: {
                    globals: {
                        react: 'React',
                        node: 'node'
                    }
                }
            },
            target: ['esnext'],
        }
    }
})