const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');

async function compilescss () {
    gulp.src('./src/scss/*.scss','./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify())
        .pipe(rename(function (path) {
            return {
            dirname: path.dirname + "",
            basename: path.basename + ".min",
            extname: ".css"
            };
        }))
        .pipe(gulp.dest('./static/css'))
};

gulp.task('watch',function(){
    gulp.watch('./src/scss/*.scss', compilescss)
});

gulp.task('default',function(){
    gulp.watch('./src/scss/*.scss', compilescss)
});