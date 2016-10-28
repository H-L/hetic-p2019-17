var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: '*'
});

var processors = [plugins.autoprefixer];

gulp.task('scss', function () {
	return gulp.src('scss/main.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.sass())
		.pipe(plugins.postcss(processors))
		.pipe(gulp.dest('css'))
});

gulp.task('sync', ['scss'], function () {
	plugins.browserSync.init({
		server: './'
	})
	gulp.watch("scss/**/*.scss", ['scss']);
});
