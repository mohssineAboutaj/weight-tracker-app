const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

// html pages
const fs = require('fs');
const dir = "./src";
const pkg = require('./package.json');
const mainTitle = pkg.name.replace(/-/ig, ' ');

// scan directory & get all files in it
let filesList = fs.readdirSync(dir, (err, files) => { 
  let myfiles = [];
  if (err)  throw err;
  files.filter((file) => {
    myfiles.push(file.endsWith('.html'));
  });
  return myfiles;
});

// make multi inctance from HtmlWebpackPlugin & mke an array of them
let HWPmultiPage = () => {
	let HWPList = [],
			pages = filesList;
	pages.forEach(page => {
		HWPList.push(new HtmlWebpackPlugin({
			filename: page,
			template: `./src/${page}`,
			meta: {
				viewport: "width=device-width, initial-scale=1.0",
				author: pkg.author,
				description: pkg.description,
			},
		}))
	});
	return HWPList;
}

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.ProgressPlugin(), 
	].concat(HWPmultiPage()),

	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /.(js|jsx|mjs)$/,
				include: [path.resolve(__dirname, 'src/js')],
				loader: 'babel-loader',
				options: {
					plugins: ['syntax-dynamic-import'],
					presets: [
						[
							'@babel/preset-env',
							{
								modules: false,
							},
						],
					],
				},
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/,
				},
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true,
		},
	},

	devServer: {
		contentBase: path.join(__dirname, 'src'),
		open: true,
		port: 3000,
	},
};
