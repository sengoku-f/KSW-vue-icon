import { type } from 'os';

const OS_TYPES = {
  windows: 'Windows_NT',
  linux: 'Linux',
  darwin: 'Darwin'
}

export const isWindows = () => type() === OS_TYPES.windows;

export const isLinux = () => type() === OS_TYPES.linux;

export const isMacOS = () => type() === OS_TYPES.darwin;