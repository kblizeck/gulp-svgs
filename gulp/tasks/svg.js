var gulp  = require('gulp'),
    svg   = require('gulp-svg-sprite'),
    globals = require('../globals');


var config = {
  svg: {
    // name of svg sprite to process (must not contain a "-" character)
    general: {
      // destination of files to process - can use globbing
      src: globals.appPath + '/assets/images/general-src/**/*.svg',
      // destination of output file - expects relative path ending in "/"
      dest: globals.appPath + '/assets/images/general-sprite/'
    }
  }
};

//svg
for(var key in config.svg) {
  gulp.task('svg-'+key, function() {
    var key = this.seq[0].split('-')[1];
    gulp.src(config.svg[key].src)
      .pipe(svg({
          mode: {
              inline: true,
              symbol: true
          }
      }))
      .pipe(gulp.dest(config.svg[key].dest));
  });
}
