module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  projects: ['../**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts', '*.spec.tsx']
}

