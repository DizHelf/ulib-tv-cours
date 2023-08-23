import webpack from 'webpack'
import path from 'path'

import { BuildOptions } from "./types/config";
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {mode, paths, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };
}