var gulp = require('gulp'),
sass = require('gulp-sass');
sync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');

var processors = [
autoprefixer
];

gulp.task('scss', function() {
return gulp.src('scss/main.scss').pipe(plumber({errorHandler: onError}))
.pipe(sass())
.pipe(postcss(processors))
.pipe(gulp.dest('css/main.css'))
.pipe(sync.stream());
});

gulp.task('sync', ['scss'], function(){
		sync.init({
			server:'./'
		})
		gulp.watch("scss/**/*.scss", ['scss']);

});