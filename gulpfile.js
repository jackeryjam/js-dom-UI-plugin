var gulp = require("gulp")
var uglify = require("gulp-uglify")
let babel = require('gulp-babel')

gulp.task('default', function() {
  gulp.src("./src/*.js")
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest("./dist"))
});
