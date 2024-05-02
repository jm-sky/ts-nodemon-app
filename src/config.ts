import path from 'node:path';
import { Config } from './types/index.js';

const DEFAULTS: Config = {
  appName: 'App Name',
  interval: 5000,
  rootPath: path.resolve(),
};

const getConfig = (): Config  => {
  const interval = parseInt(process.env.INTERVAL);

  return {
    ...DEFAULTS,
    appName: process.env.APP_NAME ?? DEFAULTS.appName,
    interval: isNaN(interval) ? DEFAULTS.interval : interval,
  };
};

export const config = getConfig();
