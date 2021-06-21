import { RoomObject } from "/game/prototypes/room-object";

export interface Flag extends RoomObject {
  my: boolean;
}
export const Flag: Flag