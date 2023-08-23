import webpack from 'webpack'
import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildOptions, BuildPaths } from './config/build/types/config';


//мод
const mode = "development";

//isDev
const isDev = mode === "development"

//маршруты
const paths: BuildPaths = {
  html: path.resolve(__dirname, "public", "index.html"),
  output: path.resolve(__dirname, "dist"),
  entry: path.resolve(__dirname, "src", "index.ts"),
}



const options: BuildOptions = {
  mode,
  paths,
  isDev
}

const config: webpack.Configuration = buildWebpackConfig(options)

export default config;