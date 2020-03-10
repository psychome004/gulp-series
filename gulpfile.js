// Can use different variable names
var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );

// File Path
var styleSrc   = './src/scss/style.scss';
var styleDest  = './dist/css/';

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
