const path = require('path');

module.exports = {
	entry: {
		index: './src/index.ts',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
			},
			{
				test: /\.html$/,
				use: 'raw-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	mode: process.env.NDOE_ENV === 'dev' ? 'development' : 'production',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
