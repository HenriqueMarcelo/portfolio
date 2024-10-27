/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  // @ts-ignore
  test: {
    globals: true, // fix: ReferenceError: expect is not defined
    environment: "jsdom", // fix: ReferenceError: document is not defined
    setupFiles: "./src/setupTests.ts", // fix: Invalid Chai property: toBeInTheDocument
  },
})
