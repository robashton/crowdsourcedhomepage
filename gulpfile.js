
var gulp = require('gulp'); 

var sass = require('gulp-sass');
var stylus = require('gulp-stylus');


gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('stylus', function() {
	gulp.src('stylus/stylus.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'stylus']);