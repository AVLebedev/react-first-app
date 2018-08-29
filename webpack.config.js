const webpack = require('webpack');
const path = require('path');
//const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/')
		}
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.EnvironmentPlugin('NODE_ENV')
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};