/*eslint-env node*/

/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

"use strict";

var gulp = require("gulp");
var wrench = require("wrench");

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive("./tasks").filter(function (file) {
  return (/\.(js)$/i).test(file);
}).map(function (file) {
  require("./tasks/" + file);
});

/**
 *  Default task serves for development
 */
gulp.task("default", ["serve"]);
