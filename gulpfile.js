// Can use different variable names
var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );

// File path for styles
var styleSrc   = './src/scss/style.scss';
var styleDest  = './dist/css/';

// File path for js
var jsSrc   = './src/js/script.js';
var jsDest  = './dist/js/';

//Watch file paths
var watchStyle = './src/scss/**/*.scss';
var watchJs = './src/js/**/*.js';



// style task
gulp.task('style',function(){

  gulp.src( styleSrc )
      .pipe( sourcemaps.init() )
      .pipe( sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      }) )
      .on('error',console.error.bind(console))
      .pipe( autoprefixer({
        browsers: ['Last 2 versions'],
        cascade: false
      }) )
      .pipe( rename( {suffix: '.min'} ) )
      .pipe( sourcemaps.write('./') )
      .pipe( gulp.dest( styleDest ) );

});

// js task
gulp.task('js',function(){
  gulp.src( jsSrc )
  .pipe( gulp.dest( jsDest ) );
});
/**
 * start-> fire multiple task
 * gulp.series() -> takes in all task names
 * Code below can run multiple tasks ( task names are inside array )
 */
gulp.task( 'start', gulp.series( 'style', 'js' ) );


/**
 * watch -> Get's triggered when any of the file is updated/deleted/added
 * watch then compiles all the files
 */
// gulp.task( 'watch', gulp.series( 'style', 'js' ), function(){
  /**
   * watchStyle -> File location
   * ['style'] -> Task name
   */
//   gulp.watch( watchStyle, ['style'] );
//   gulp.watch( watchJs, ['js'] );
// });
