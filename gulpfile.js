const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;

gulp.task('sass', () => {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', () => {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', () => {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify.script', () => {
    return gulp.src("./script.js")
        .pipe(rename("script.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("./dist/"));
});

gulp.task('run', ['sass', 'css', 'html', 'uglify.script']);

gulp.task('watch', () => {
	gulp.watch('./sass/*.sass', ['sass'])
	gulp.watch('./css/*.css', ['css'])
  gulp.watch('./*.html', ['html'])
  gulp.watch('./*.js', ['uglify.script'])
});

gulp.task('default', ['run', 'watch']);