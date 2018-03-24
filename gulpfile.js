"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); // runs a local dev server
var open = require("gulp-open"); // open a URL in a web browser
var browserify = require("browserify"); // bundles js
// var reactify = require("reactify"); // transforms react JSX to JS
var source = require("vinyl-source-stream"); // Use conventional text streams with Gulp
var concat = require("gulp-concat"); // concatenates files
var lint = require("gulp-eslint");

var config = {
  port: 9005,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./src/*.html",
    dist: "./dist",
    js: "./src/**/*.js",
    css: "node_modules/bootstrap/dist/css/bootstrap.min.css",
    mainJs: "./src/main.js",
    images: "./src/images/*"
  }
};

// start a local development server
gulp.task("connect", function() {
  connect.server({
    root: ["dist"],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task("open", ["connect"], function() {
  gulp
    .src("dist/index.html")
    .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
});

gulp.task("html", function() {
  gulp
    .src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task("css", function() {
  gulp
    .src(config.paths.css)
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest(config.paths.dist + "/css"));
});

// Migrates images to dist folder
// Note that I could even optimize my images here
gulp.task("images", function() {
  gulp
    .src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + "/images"))
    .pipe(connect.reload());

  //publish favicon
  gulp.src("./src/favicon.ico").pipe(gulp.dest(config.paths.dist));
});

gulp.task("js", function() {
  browserify(config.paths.mainJs)
    .transform("babelify", { presets: ["react"] })
    .bundle()
    .on("error", console.error.bind(console))
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(config.paths.dist + "/scripts"))
    .pipe(connect.reload());
});

//eslint for format setup of the whole files of config.paths.js.
// configFile is new setting
// ALREADY DEPRECATION!
gulp.task("lint", function() {
  return gulp
    .src(config.paths.js)
    .pipe(lint({ config: ".eslintrc" }))
    .pipe(lint.format());
});
gulp.task("default", ["html", "open", "js", "lint", "css", "images"]);
