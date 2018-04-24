//entry --> output
//in test below \ means to escape . so look for all files js ($ means valid selector that ends with js) in module for instance 
//test below use: another term to put an array of the set of css loader in this case

const path = require ('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		preLoaders: [
			{
				test: /(\.js$|\.jsx$)/, 
				exclude: /node_modules/, 
				loader: "eslint-loader"
			}
		]
	},
		eslint: {  
			configFile: '.eslintrc'
		},
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/,
		}, {
			//test: /\.css$/,
			//use: ['styles-loader','css-loader']
			//adding ? means look for content that has scss and css
			test: /\.s?css$/,
			use: ['styles-loader','css-loader', 'sass-loader']
		}]

	};

	devtool: 'cheap-module-eval-source-map';	
	devServer: {
		contentBase: path.join(__dirname, 'public');
	}
// }
