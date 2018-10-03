const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			},
			{
		      	test: /\.scss$/,
		      	use:  [
		      		'style-loader',
		            MiniCssExtractPlugin.loader,
			        'css-loader', 
		      		'sass-loader'
	      		]		      	
		    }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			constants: path.resolve(__dirname, 'src/constants/'),
			styles: path.resolve(__dirname, 'src/styles/'),
			reducers: path.resolve(__dirname, 'src/reducers/'),
			actions: path.resolve(__dirname, 'src/actions/'),
			containers: path.resolve(__dirname, 'src/containers/'),
		}
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
	        filename: 'style.css'
	    })
		//new webpack.EnvironmentPlugin('NODE_ENV')
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};