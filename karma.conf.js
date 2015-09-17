/*eslint-env node*/

/**
 *  Karma config
 */

"use strict";

// TODO: configure karma + jasmine
module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],

    files: [
      "**/*.spec.js"
    ]
  });
};
