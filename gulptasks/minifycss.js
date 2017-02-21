var minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');


module.exports = function(gulp) {
    gulp.task('minifycss', function() {
        gulp.src(['./public/css/libs/*.css', './public/css/style.css'])
            .pipe(sourcemaps.init())
            .pipe(minifyCss())
            .pipe(concat('style.min.css'))
            .pipe(sourcemaps.write('./sourcemaps'))
            .pipe(gulp.dest('./public/css'));
        console.log('====> Minifycss is built sucessfully!');
    });
};
