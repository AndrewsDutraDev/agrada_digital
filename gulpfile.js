const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require(`gulp-plumber`);
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');


gulp.task('scss', gulp.series(function () {
    return gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./static/css'));
}));

gulp.task('watch',function(){
    return gulp.watch('./src/scss/*.scss', gulp.parallel(['scss']))
});


gulp.task('default', gulp.series(['scss', 'watch']));