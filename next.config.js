const defaultWebpack = require('./webpack.config.default');
const BabiliPlugin = require('babili-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    webpack: (config, { dev, server }) => {
        // replace UglifyJS with Babili
        // see: https://github.com/zeit/next.j s/issues/3553
        // eslint-disable-next-line immutable/no-mutation, no-param-reassign
        config.plugins = config.plugins.filter(plugin => (
            plugin.constructor.name !== 'UglifyJsPlugin'
        ));

        if (!dev) {
            config.plugins.push(new BabiliPlugin());
        }

        config.plugins.push(new Dotenv());

        return config;
    },
    webpackDevMiddleware: config => config,
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 60 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 4,
    },
};

