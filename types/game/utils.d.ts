
export function getTime(): number;
export function getObjectById<T>(id: string): T;
export function getObjects(): any[];
export function getObjectsByPrototype<T>(prototype: T): T[];
export function getHeapStatistics(): any;
export function getDirection(dx: number, dy: number): number;
export function findPath(fromPos: any, toPos: any, opts?: {}): any;
export function getDistance(a: any, b: any): number;
export function getTerrainAt(pos: any): number;
