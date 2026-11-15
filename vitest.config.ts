import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/Dev_projects/',
  test: {
    environment: 'node',
    include: ['frontend/src/**/*.test.ts', 'frontend/src/**/*.test.tsx'],
  },
});
