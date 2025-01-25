/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
	"**/repository/**/*.ts",
	"<rootDir>/route/**/*.ts",
	"<rootDir>/service/**/*.ts",
	"<rootDir>/shared/**/*.ts"
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

export default config;
