'use strict';

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const path = require('path');
const webpack = require('webpack');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

// ----------------------------------------
// Private
// ----------------------------------------

const _cwd = process.cwd();

// ----------------------------------------
// Public
// ----------------------------------------

const webpackConfig = {
	entry: {
		'app-bundle': path.join(_cwd, './src/js/app.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(_cwd, './public/assets/js/'),
		publicPath: '/public/assets/',
		chunkFilename: '_async-modules/[name].js?v=[chunkhash]'
	},
	plugins: [
		new SVGSpritemapPlugin({
			src: 'src/svg/**/*.svg',
			filename: 'sprite.svg',
			gutter: 5,
			prefix: 'sprite-',
			svgo: {
				plugins: [{
					removeTitle: true
				}]
			}
		})
	]
};

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = webpackConfig;
