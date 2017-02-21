var less = require('gulp-less');

module.exports = function(gulp) {    
    gulp.task('less', function() {
        gulp.src(['./less/style.less'])            
            .pipe(less())                    
            .pipe(gulp.dest('./public/css'));
        console.log('====> Less is built sucessfully!');
    });
};