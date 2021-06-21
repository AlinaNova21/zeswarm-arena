export interface RoomObject {
  constructor(id: string);
  id: string;
  exists: boolean;
  x: number;
  y: number;
  findPathTo(pos: any, opts: any): any;
  toJSON(): {
    id: string;
    x: number;
    y: number;
  };
}
export const RoomObject: RoomObject