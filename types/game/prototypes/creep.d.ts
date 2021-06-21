import { RoomObject } from './room-object';

type BodyPart = {
  type: string
  hits: number
  hitsMax: number
}

export interface Creep extends RoomObject {
  hits: number;
  hitsMax: number;
  my: boolean;
  body: BodyPart[];
  move(direction: number): number;
  moveTo(pos: any, opts?: any): number;
  moveTo(x: number, y: number, opts?: any): number;
  rangedAttack(target: any): number;
  rangedMassAttack(): number;
  attack(target: any): number;
  heal(target: any): number;
  rangedHeal(target: any): number;
  pull(target: any): number;
}
export const Creep: Creep