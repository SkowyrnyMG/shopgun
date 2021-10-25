const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]sx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    `@storybook/preset-scss`,
  ],

  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  },
};
