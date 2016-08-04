module.exports = {
	entry:'./application/js/main.js',
	output:{
		path:'./public',
		filename:'bundle.js'
	},
	devtool: "inline-source-map",
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
}
/*devServer:{
	inline:true,
	port:3333
},*/
// loaders: ['style', 'css', 'sass']
/*{
	test: /\.css$/,
	loader: "style-loader!css-loader"
},*/