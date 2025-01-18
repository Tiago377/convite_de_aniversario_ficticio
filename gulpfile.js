import gulp from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";

const sassCompiler = gulpSass(sass);

const paths = {
    scss: "./src/styles/*.scss",
    css: "./dist/styles"
};

export const compilaSass = () => {
    return gulp.src(paths.scss)
        .pipe(sassCompiler().on("error", sassCompiler.logError))
        .pipe(gulp.dest(paths.css))
}

export const watch = ()  => {
    gulp.watch(paths.scss, compilaSass)
}

export default gulp.parallel(compilaSass)