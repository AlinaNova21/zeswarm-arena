export { Creep } from './prototypes/creep';
export { RoomObject } from './prototypes/room-object';
export { Spawn } from './prototypes/spawn';
export { StructureTower } from './prototypes/tower';
export { StructureWall } from './prototypes/wall';
import { Creep } from './prototypes/creep';
import { RoomObject } from './prototypes/room-object';
import { Spawn } from './prototypes/spawn';
import { StructureTower } from './prototypes/tower';
import { StructureWall } from './prototypes/wall';

export type AnyRoomObject = Creep | RoomObject | Spawn | StructureTower | StructureWall