var gulp = require('gulp')
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('Hoory we created a gulp task');
});

gulp.task('html', function() {
    console.log('the html task');
});

gulp.task('watch', function() {

   // we use the gulp series insted of 'start function'
   watch('./app/index.html', gulp.series('html'));
});