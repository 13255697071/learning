/**
 * Created by sf-pc on 2017/2/28.
 */

   // less编译压缩合并
   //js 合并 压缩 混淆
    // img复制
    //html压缩
    //D:\前端\案例\主流框架\gulp-demo>npm install gulp-less gulp-concat gulp-uglify gulp-cssnano gulp-htmlmin  --save-dev

var gulp= require('gulp');

var less=require('gulp-less');
var cssnano=require('gulp-cssnano');

// less编译压缩合并  
gulp.task('style',function(){
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles/'));
});

var browserSync=require('browser-sync');
gulp.task('serve',function(){
    browserSync({server: true}, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
});