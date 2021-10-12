const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@shopgun/ui-kit"],{
    resolveSymlinks: true,
    debug: false,
  }
);
const withImages = require("next-images");


/** @type {import('next').NextConfig} */
module.exports = withPlugins([withTM(), withImages], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});
