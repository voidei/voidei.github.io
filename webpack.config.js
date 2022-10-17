const path = require('path');

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, 'UwU/src/ts/UwU.ts'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'UwU.js',
		path: path.resolve(__dirname, 'src/libs'),
		libraryTarget: 'var',
		library: 'UwU'
	},
};
module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, 'ark/ark.ts'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'ark.js',
		path: path.resolve(__dirname, 'src/libs'),
		libraryTarget: 'var',
		library: 'ark'
	},
}
