import webpack from 'webpack'
import path from 'path'
import { BuildOptions } from './types/config'


export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {

  const {paths} = options

  const alias = {
    Utilities: path.resolve(__dirname, 'src/utilities/'),
    Templates: path.resolve(__dirname, 'src/templates/'),
  }

  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [
      paths.src, "node_modules"
    ],
    mainFiles: ['index'],
    alias: {}
  }
}