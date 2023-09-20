import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
import webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {

    const {paths, isDev} = options

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}