var gulp = require('gulp')
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('Hoory we created a gulp task');
});

gulp.task('html', function() {
    console.log('the html task');
});

gulp.task('css', function() {
    console.log('Imagine Sass or post css task runing here.');
});

gulp.task('watch', function() {

   // we use the gulp series insted of 'start function'
   watch('./app/index.html', gulp.series('html'));
   watch('./app/assets/images/styles/**/*.css', gulp.series('css'));

});


