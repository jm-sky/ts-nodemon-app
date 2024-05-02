// import path from "path";
// import dotenv from "dotenv";
import { Config } from '@/types';

const DEFAULTS: Config = {
  appName: 'App Name',
  interval: 5000,
}

const getConfig = (): Config  => {
  const interval = parseInt(process.env.INTERVAL)

  return {
    appName: process.env.APP_NAME ?? DEFAULTS.appName,
    interval: isNaN(interval) ? DEFAULTS.interval : interval,
  };
};

export const config = getConfig()
