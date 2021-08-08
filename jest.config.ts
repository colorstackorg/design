import { Config as JestConfig } from '@jest/types';

const coverageOptions: Partial<JestConfig.InitialOptions> = {
  collectCoverageFrom: ['**/src/**/*.ts*'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    '.test.ts',
    '.types.ts',
    'constants.*.ts',
    '<rootDir>/src/assets/*'
  ]
};

const mockOptions: Partial<JestConfig.InitialOptions> = {
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true
};

const jestConfig: JestConfig.InitialOptions = {
  ...coverageOptions,
  ...mockOptions,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.ts*']
};

export default jestConfig;
