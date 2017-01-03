module.exports = {
	entry : './entry.js',
	output : {
		path : __dirname,
		filename : 'bundle.js'
	},
	module : {
		preLoaders : [
			{
				test : /\.js$/,
				loader : 'eslint',
				exclude : /(node_modules|bower_components)/
			}
		],
		loaders : [
			{ test : /\.sass$/, loader : 'style!css!sass'},
			{
				test : /\.js$/,
				loader : 'babel',
				exclude : /(node_modules|bower_components)/,
				query : {
					presets : ['es2015']
				}
			}
		]
	}
};

// https://hyunseob.github.io/2016/04/03/webpack-practical-guide/
