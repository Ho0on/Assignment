import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dirname = path.resolve();

const module = {
	entry: './src/index.js',
	output: {
		path: path.resolve(dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader' }],
	},
	resolve: {
		modules: [path.resolve(dirname, 'src'), 'node_modules'],
		extensions: ['.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

export default module;
