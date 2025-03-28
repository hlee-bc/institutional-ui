import "server-only"

export interface FromEnv {
  oms: string
  nitrox: string
}

const chooseByEnv = (dev: string, staging: string, prod: string) => {
  const env = process.env.NEXT_PUBLIC_APP_ENV?.trim()
  return env === "production" ? prod : env === "staging" ? staging : dev
}

const fromEnv = (): FromEnv => {
  return {
    oms: chooseByEnv("test-optimus", "staging-optimus", "optimus"),
    nitrox: chooseByEnv("test-nitrox", "staging-nitrox", "nitrox"),
  }
}

export default fromEnv
