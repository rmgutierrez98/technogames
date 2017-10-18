var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('games', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 8500
    }));
    
});

gulp.task('build-html', function() {
  return gulp.src(['*.html','Pagi*/*.html'])
      .pipe(useref())
      .pipe(gulpif('j*/*.js', uglify()))
      .pipe(gulpif('style*/*.css', minifyCss()))
      .pipe(gulp.dest('build'));
});

gulp.task('build-assets',function(){
  return gulp.src('Asset*/Im*/**')
  .pipe(gulp.dest('build'))
})

gulp.task('build',['build-html','build-assets'])



