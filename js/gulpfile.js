const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');

// 压缩css
function minifyCss() {
    return gulp.src('./public/**/*.css')
     .pipe(minifycss())
     .pipe(gulp.dest('./public'));
}

// 压缩html
function minifyHtml() {
    return gulp.src('./public/**/*.html')
     .pipe(htmlclean())
     .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
     .pipe(gulp.dest('./public'));
}

// 压缩js 不压缩min.js
function minifyJs() {
    return gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
     .pipe(uglify())
     .pipe(gulp.dest('./public'));
}

// 执行 gulp 命令时执行的任务
function defaultTask() {
    return gulp.parallel(minifyHtml, minifyCss, minifyJs)();
}

exports.minifyCss = minifyCss;
exports.minifyHtml = minifyHtml;
exports.minifyJs = minifyJs;
exports.default = defaultTask;