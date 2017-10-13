var es = require('event-stream');  //流
var gulp = require('gulp');
var concat = require('gulp-concat'); //合并js文件  减少网络请求
var templateCache = require('gulp-angular-templatecache');//合并html模版到一个js文件中
var ngAnnotate = require('gulp-ng-annotate');  //去掉注释
var rename = require('gulp-rename');  //重命名
var uglify = require('gulp-uglify');//压缩javascript文件，减小文件大小

var scripts = require('./app.scripts.json');

var source = {
    js: {
        main: 'app/main.js',
        src: [
        
            'app/main.js',

         
            'app/app.js',

            'app/**/module.js',
          

             'app/**/controllers/*.js',
             'app/**/directives/*.js',
             'app/**/models/*.js'

        ],
        tpl: 'app/**/views/*.tpl.html'
    }
};

var destinations = {
    js: 'build'
};

gulp.task('build', function () {
    return es.merge(gulp.src(source.js.src), getTemplateStream())
         .pipe(ngAnnotate())
         .pipe(concat('app.js'))
         .pipe(gulp.dest(destinations.js))
         .pipe(rename({ suffix: '.min' }))   
         .pipe(uglify({
            mangle: {
                except: ['require', 'exports', 'module', '$']
            },
            compress: true,
            preserveComments: 'license' 
        }))   
        .pipe(gulp.dest(destinations.js)); 
});

gulp.task('vendor', function () {
    var paths = [];
    scripts.prebuild.forEach(function (script) {
        var scriptFileName = scripts.paths[script];
        paths.push(scripts.paths[script]);
    });
    gulp.src(paths)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(destinations.js))

});
var getTemplateStream = function () {
    return gulp.src(source.js.tpl)
        .pipe(templateCache({
            root: 'app/',
            module: 'app'
        }))
};


gulp.task('watch', function () {
    gulp.watch(source.js.src, ['build']);
    gulp.watch(source.js.tpl, ['build']);
});


gulp.task('default', ['vendor', 'build', 'watch']);