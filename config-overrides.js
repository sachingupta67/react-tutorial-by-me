const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      common: path.resolve(__dirname, "src/common"),
    },
  };
  return config;
};
