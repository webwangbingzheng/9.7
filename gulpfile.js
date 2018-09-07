var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var mincss = require('gulp-clean-css');
var minjs = require('gulp-uglify');
var fs = require('fs');
var url = require('url');
var path = require('path');

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(mincss())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('./src/build'))
})
gulp.task('server', function() {
    return gulp.src('./src/')
        .pipe(server({
            port: 8080,
            middleware: function(req, res) {
                if (req.url === '/favicon.ico') {
                    res.end('');
                    return;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
            }
        }))
})
gulp.task('watch', function() {
    return gulp.watch('./src/sass/*.scss', gulp.series('sass'));
})
gulp.task('default', gulp.series('sass', 'server', 'watch'));