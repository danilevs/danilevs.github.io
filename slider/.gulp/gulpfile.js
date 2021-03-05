const { src, dest } = require('gulp');
const sass = require('gulp-sass');

const css = () => (
	src('sass/*.scss')
		.pipe(sass())
		.pipe(dest('../css'))
)

exports.default = css;
