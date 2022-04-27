import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader' },
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
