var gulp   = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
    gulp.src('dev/my-script.js')
        .pipe(uglify({}))
        .pipe(gulp.dest('dist'));
});
    gulp.task('default',['uglify']);

gulp.task('watch', function() {
    gulp.watch('dev/*.js', ['default']);
});