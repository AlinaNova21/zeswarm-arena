import { Flag } from '/arena';
import { Creep } from '/game/prototypes';
import { getDistance, getObjectsByPrototype } from '/game/utils';

export function * healer(creep: Creep) {
  const myCreeps = getObjectsByPrototype(Creep).filter(i => i.my)
  const enemyCreeps = getObjectsByPrototype(Creep).filter(i => !i.my)
  const enemyFlag = getObjectsByPrototype(Flag).find(i => !i.my)
  while (true) {
    const targets = myCreeps.filter(i => i !== creep && i.hits < i.hitsMax)
      .sort((a, b) => a.hits - b.hits)

    if (targets.length) {
      creep.moveTo(targets[0])
    }
    else {
      creep.moveTo(enemyFlag)
    }

    const healTargets = myCreeps.filter(i => getDistance(i, creep) <= 3)
      .sort((a, b) => a.hits - b.hits);

    if (healTargets.length > 0) {
      if (getDistance(healTargets[0], creep) === 1) {
        creep.heal(healTargets[0]);
      }
      else {
        creep.rangedHeal(healTargets[0]);
      }
    }

    const range = 7;
    const enemiesInRange = enemyCreeps.filter(i => getDistance(i, creep) < range);
    if (enemiesInRange.length > 0) {
      // flee(creep, enemiesInRange, range);
    }

    creep.moveTo(enemyFlag);
    yield
  }
}