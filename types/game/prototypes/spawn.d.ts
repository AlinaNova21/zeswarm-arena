import { Creep } from "./creep";
import { RoomObject } from "./room-object";

export interface Spawn extends RoomObject {
  hits: number;
  my: boolean;
  spawnCreep(body: any): Creep;
}
export const Spawn: Spawn