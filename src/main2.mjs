import * as game from '/game'
import * as pathFinder from '/game/path-finder';
import * as prototypes from '/game/prototypes';

import * as arena from '/arena';

// This is the only exported function from the main module. It is called every tick.
export function loop() {
  console.log(Object.keys(require))
}

function doExport(name, obj) {
  console.log(name)
  for (const key of Object.keys(obj)) {
    console.log(`export ${key} = ${obj[key]}`)
  }
}
