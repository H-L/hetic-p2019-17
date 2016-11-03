var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: '*'
});
var reload = plugins.browserSync.reload;

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
		.pipe(reload({ stream:true }));
});

gulp.task('minjs', function () {
	return gulp.src('app/**/*.js')
		.pipe(plugins.minify({
			ext: {
				src: '-debug.js',
				min: '.js'
			},
			exclude: ['tasks'],
			ignoreFiles: ['.combo.js', '-min.js']
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(plugins.notify({
			message: 'JS Uglified'
		}))
		.pipe(reload({ stream:true }));
});

gulp.task('normaljs', function () {
	return gulp.src('app/js/*.js')
		.pipe(gulp.dest('dist/js'))
		.pipe(plugins.notify({
			message: 'JS Uploaded in dist file'
		}))
		.pipe(reload({ stream:true }));
});

gulp.task('browserSync', function() {
  plugins.browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
})

// Add minjs task when JS would be ready
gulp.task('watch', ['browserSync', 'scss', 'normaljs'], function () {
	gulp.watch('app/**/*.scss', ['scss']);
	gulp.watch('app/**/*.js', ['normaljs']);
	gulp.watch('dist/**/*.html', reload);
});
