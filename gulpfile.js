var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var jshint		= require('gulp-jshint');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var minifyCSS 	= require('gulp-minify-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([
    	'node_modules/bootstrap/scss/bootstrap.scss',
    	'node_modules/font-awesome/scss/font-awesome.scss',
        'src/scss/**/*.scss'
    	])
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

// Compile javascript
gulp.task('js', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'src/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('public/js'));
})

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['serve', 'sass', 'js', 'watch']);