export type BuildMod = 'development' | 'production'

export interface BuildPaths {
  entry: string,
  output: string,
  html: string 
  src: string
}

export interface BuildEnv {
  mode: BuildMod,
  port: number
}

export interface BuildOptions {
  mode: BuildMod;
  paths: BuildPaths,
  isDev: boolean,
  PORT: number,
}