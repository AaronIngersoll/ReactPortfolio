const path = require("path");
const { merge } = require("webpack-merge");
const autoprefixer = require("autoprefixer");
const webpackCommon = require("./common.config");

// webpack plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = merge(webpackCommon, {
	bail: true,

	devtool: "source-map",
	mode: "production",
	output: {
		path: path.resolve(__dirname, "../static/dist"),

		filename: "[name].js",

		sourceMapFilename: "[name].map",

		chunkFilename: "[id]-chunk.js",

		publicPath: "/",
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "expanded",
							},
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, "../static/index.html"),
			favicon: path.resolve(__dirname, "../static/favicon.ico"),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "../static"),
					to: "dest/",
				},
			],
		}),

		new CleanWebpackPlugin(),
		new DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production"),
			},
		}),

		new LoaderOptionsPlugin({
			options: {
				context: "/",
				sassLoader: {
					includePaths: [path.resolve(__dirname, "../src")],
				},
			},
		}),
	],
});
