import { RoomObject } from "./room-object";

export interface StructureWall extends RoomObject {
  hits: number;
  hitsMax: number;
}
export const StructureWall: StructureWall