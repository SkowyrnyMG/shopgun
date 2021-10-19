const baseConfig = require("../../jest.config.base");

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.ts"],
};
