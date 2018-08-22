const webpack = require('webpack');
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
		extensions: ['*', '.js', '.jsx']
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