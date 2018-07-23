'use strict';

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const webpack = require('webpack');
const path = require('path');

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
	}
};

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = webpackConfig;
