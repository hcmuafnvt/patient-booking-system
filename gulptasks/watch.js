module.exports = function (gulp) {
   gulp.task('watch:less', function () {
      gulp.watch('./less/**/*.less', ['less', 'minifycss']);
   });

   gulp.task('watch:js', function () {
      gulp.watch(['./public/js/**/*.js', '!./public/js/libs/**/*.js', '!./public/js/app.min.js'], ['browserify']);
   });
};