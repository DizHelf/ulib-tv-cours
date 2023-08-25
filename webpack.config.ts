import webpack from 'webpack'
import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildOptions, BuildPaths } from './config/build/types/config';



export default (env: BuildEnv) => {
  //мод
  const mode = env.mode || "development";

  //isDev
  const isDev = mode === "development";

  //порт
  const PORT = env.port || 3000;

  //маршруты
  const paths: BuildPaths = {
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    src: path.resolve(__dirname, "src")
  }

  //передаваемые опции 
  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    PORT
  }

  //вызов создания webpack
  const config: webpack.Configuration = buildWebpackConfig(options)


  return config;
};