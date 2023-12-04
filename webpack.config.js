const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      timers: require.resolve("timers-browserify"),
    },
  },
  // Other webpack configuration options can go here
};
