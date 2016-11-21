var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: '*'
});
var reload = plugins.browserSync.reload;

var processors = [plugins.autoprefixer];

// TASKS

// -- WATCH
// Add minjs task when JS would be ready
gulp.task('watch', ['browserSync', 'scss', 'normaljs', 'html'], function () {
	gulp.watch('app/**/*.scss', ['scss']);
	gulp.watch('app/**/*.js', ['normaljs']);
	gulp.watch('app/**/*.html', ['html']);
});

// -- WATCH
// Add minjs task when JS would be ready
gulp.task('compile', ['scss', 'normaljs', 'html', /*'imagemin'*/], function () {
	gulp.watch('app/**/*.scss', ['scss']);
	gulp.watch('app/**/*.js', ['normaljs']);
	gulp.watch('app/**/*.html', ['html']);
	// gulp.watch('app/imgs/original/**/*.{jpg,png,gif,svg}', ['imagemin']);
});

// -- SCSS
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
		// .pipe(plugins.notify({
		// 	message: 'SCSS Compiled'
		// }))
		.pipe(reload({ stream:true }));
});

// -- Minify JS
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
		// .pipe(plugins.notify({
		// 	message: 'JS Uglified'
		// }))
		.pipe(reload({ stream:true }));
});

// -- Copy / Paste JS without Uglify
gulp.task('normaljs', function () {
	return gulp.src('app/js/*.js')
		.pipe(gulp.dest('dist/js'))
		// .pipe(plugins.notify({
		// 	message: 'JS Uploaded in dist file'
		// }))
		.pipe(reload({ stream:true }));
});

// -- IMG Minifier for PNG, JPG, GIF, SVG
gulp.task('imagemin', function () {
	return gulp.src('app/imgs/original/**/*.{jpg,png,gif,svg}')
		.pipe(plugins.imagemin())
		.pipe(gulp.dest('./dist/imgs'))
		.pipe(gulp.dest('./app/imgs/compressed'))
		// .pipe(plugins.notify({
		// 	message: 'IMG Minified'
		// }));
});

// -- Copy / Paste HTML
gulp.task('html', function () {
	return gulp.src('app/**/*.html')
		.pipe(plugins.htmlclean())
		.pipe(gulp.dest('./dist'))
		// .pipe(plugins.notify({
		// 	message: 'HTML Minified'
		// }));
});

// -- Browser Sync Parameters
gulp.task('browserSync', function() {
  plugins.browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
})
