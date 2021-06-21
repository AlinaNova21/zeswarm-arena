import { Flag } from "/arena";
import { Creep } from "/game/prototypes";
import { getDistance, getObjectsByPrototype } from "/game/utils";
export function* defender(creep) {
    /** @type {Flag} */
    const myFlag = getObjectsByPrototype(Flag).find(i => i.my);
    while (true) {
        const enemyCreeps = getObjectsByPrototype(Creep).filter(i => !i.my);
        if (!enemyCreeps.length) {
            const enemyFlag = getObjectsByPrototype(Flag).find(i => !i.my);
            creep.moveTo(enemyFlag);
            yield;
            continue;
        }
        const targets = enemyCreeps
            .filter(t => t.exists && getDistance(t, creep) < 2);
        const [target] = targets;
        creep.attack(target);
        if (myFlag) {
            creep.moveTo(myFlag);
        }
        yield;
    }
}
