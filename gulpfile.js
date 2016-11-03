var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: '*'
});

var processors = [plugins.autoprefixer];

gulp.task('scss', function () {
	return gulp.src('app/scss/main.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass())
		.pipe(plugins.postcss(processors))
		.pipe(plugins.cleanCss({
			compatibility: 'ie8'
		}))
		.pipe(plugins.sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe(plugins.notify({
			message: 'SCSS Compiled'
		}))
});

gulp.task('minjs', function () {
	return gulp.src('app/js/*.js')
		.pipe(plugins.minify({
			ext: {
				src: '-debug.js',
				min: '.js'
			},
			exclude: ['tasks'],
			ignoreFiles: ['.combo.js', '-min.js']
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sync', ['scss'], function () {
	plugins.browserSync.init({
		server: './'
	})
	gulp.watch("app/scss/**/*.scss", ['scss']);
});
