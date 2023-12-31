import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
import webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {

  const {paths} = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css"
    })
  ]
}