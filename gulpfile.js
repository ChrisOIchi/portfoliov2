const	{src, dest, watch} = require('gulp');
const  sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
  src('src/scss/**/*.scss')      //identificar el archivo SASS
  .pipe(plumber())          //evitar que se detenga el proceso si hay errores
  .pipe(sass())             //compilar el archivo SASS
  .pipe(dest('build/css')); //almacenar el archivo CSS compilado
  done() //terminar la tarea
}

function dev(done) {
  //vigilar cambios en los archivos SASS
  watch('src/scss/**/*.scss', css);
  done();
}

exports.css = css; //exportar la tarea
exports.dev = dev; //exportar la tarea