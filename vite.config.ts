/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  //@ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
})
