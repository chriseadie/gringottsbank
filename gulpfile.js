const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

gulp.task("compile", () => {
  return gulp
    .src("sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("Assets/Styles/"));
});
