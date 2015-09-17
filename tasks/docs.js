/*eslint-env node*/

"use strict";

/**
 * Build documents and upload them to GitHub pages.
 */

var path = require("path");
var gulp = require("gulp");
var grock = require("grock");
var del = require("del");
var conf = require("./conf");

// clean docs
gulp.task("cleanDocsDir", function () {
  return del([
    path.join("./", conf.paths.docs)
  ]);
});

// build and publish docs
gulp.task("docs", ["cleanDocsDir"], function () {
  return grock.generator({
    glob: [path.join(conf.paths.src, "/**/*")],
    index: "README.md",
    out: conf.paths.docs,
    repositoryUrl: "https://github.com/Technochtitlan/AmateJS",
    style: "solarized",
    verbose: true
  });
});
