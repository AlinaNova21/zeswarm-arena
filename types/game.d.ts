declare module '/game'
export * as constants from './game/constants';
export * as pathFinder from './game/path-finder';
export * as prototypes from './game/prototypes';
export * as utils from './game/utils';
export * as arena from '/arena';

export const arenaInfo: {
  /**
   * "Capture the Flag"
   */
  name: string;
  level: number;
  /**
   * "alpha"
   */
  season: string;
};