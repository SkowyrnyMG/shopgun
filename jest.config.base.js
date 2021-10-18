module.exports = {
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverageFrom: [
    "<rootDir>/src/components/*.[jt]s?(x)",
    "<rootDir>/src/components/**/*.[jt]s?(x)",
  ],
  testEnvironment: "jsdom",
};
