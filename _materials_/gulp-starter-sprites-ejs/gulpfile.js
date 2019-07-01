var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var connect = require("gulp-connect");
var browserSync = require("browser-sync").create();
var ejs = require("gulp-ejs");
var sassPaths = ["src/sass"];
var svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");

gulp.task("webserver", function() {
  connect.server({
    livereload: true,
    port: 3002,
    host: "0.0.0.0"
  });
});

// Static server
gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("html", function() {
  gulp.src("*.html").pipe(connect.reload());
});

gulp.task("js", function() {
  gulp.src("*.js").pipe(connect.reload());
});

gulp.task("sprite", function() {
  gulp
    .src("src/images/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          defs: {
            example: true
          }
        }
      })
    )
    .pipe(gulp.dest("out"));
});

gulp.task("templates", function() {
  gulp
    .src("./templates/*.ejs")
    .pipe(
      ejs({
        msg: "Hello Gulp!"
      })
    )
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./"));
});

gulp.task("sass", function() {
  return gulp
    .src("src/sass/style.scss")
    .pipe(
      $.sass({
        includePaths: sassPaths
      }).on("error", $.sass.logError)
    )
    .pipe(
      $.autoprefixer({
        browsers: ["last 2 versions", "ie >= 9"]
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(connect.reload());
});

gulp.task("watch", ["sass", "html", "js"], function() {
  gulp.watch(["*.html"], ["html"]);
  gulp.watch(["src/**/*.html"], ["html"]);
  gulp.watch(["src/sass/**/*.scss"], ["sass"]);
  gulp.watch(["src/js/**/*.js"], ["js"]);
});

gulp.task("default", ["sass", "webserver", "watch"]);
