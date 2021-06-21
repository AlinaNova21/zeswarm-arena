import { RoomObject } from "/game/prototypes/room-object";

export interface BodyPart extends RoomObject {
  type: string;
  ticksToDecay: number;
}
export const BodyPart: BodyPart