import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    roots: ['<rootDir>/src'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    testMatch: ['**/__tests__/**/*.spec.(ts|tsx)'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
};

export default config;
