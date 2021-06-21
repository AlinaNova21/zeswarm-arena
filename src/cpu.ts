let time: number

export function reset() {
  time = Date.now()
}

export function getUsed() {
  return Date.now() - time
}