// eslint-disable-next-line import/no-unresolved
import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./vite.renderer.config.ts",
  "./vite.base.config.ts",
  "./vite.preload.config.ts",
  "./vite.main.config.ts"
])
