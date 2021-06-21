import { RoomObject } from "./room-object";

export interface StructureTower extends RoomObject {
  hits: number;
  hitsMax: number;
  my: boolean;
  store: {
    energy: number;
    getCapacity(): number;
  };
  attack(target: any): number;
  heal(target: any): number;
}
export const StructureTower: StructureTower