
// Use for HTML styling (Colors loosely match screeps_console)
export enum LogLevel{
  SILLY = -1,
  DEBUG,
  INFO,
  ALERT,
  WARN,
  ERROR,
  FATAL
}

const styles = {
  default: 'color: white; background-color: black',
  [LogLevel.SILLY]: 'color: blue',
  [LogLevel.DEBUG]: 'color: #008FAF',
  [LogLevel.INFO]: 'color: green',
  [LogLevel.ALERT]: 'color: #00BFAF',
  [LogLevel.WARN]: 'color: orange',
  [LogLevel.ERROR]: 'color: red',
  [LogLevel.FATAL]: 'color: yellow; background-color: red'
}

let y = 0
let tick = 0

type LogMessage = string | (() => string)

export class Logger {
  prefix: string
  level: LogLevel
  static get LogLevel () {
    return LogLevel
  }

  constructor (prefix = '') {
    this.prefix = prefix ? prefix + ' ' : ''
    this.level = LogLevel.INFO
  }

  withPrefix (prefix) {
    return new Logger(prefix)
  }

  log(level: LogLevel, message: LogMessage) {
    if (level >= this.level) {
      if (typeof message === 'function') {
        message = message()
      }
      const style = styles[level] || styles.default
      console.log(`[${level}] ${this.prefix}${message}`)
      // this._log(`<log severity="${level}" style="${style}">[${level}] ${this.prefix}${message}</log>`)
      // this.vlog(level, `[${level}] ${this.prefix} ${message}`)
    }
  }

  debug(message: LogMessage) {
    this.log(LogLevel.DEBUG, message)
  }

  info(message: LogMessage) {
    this.log(LogLevel.INFO, message)
  }

  warn(message: LogMessage) {
    this.log(LogLevel.WARN, message)
  }

  alert(message: LogMessage) {
    this.log(LogLevel.ALERT, message)
  }

  error(message: LogMessage | Error) {
    if (message instanceof Error) {
      message = message.stack
      // message = ErrorMapper.map(message)
    }
    this.log(LogLevel.ERROR, message)
  }

  fatal(message: LogMessage) {
    this.log(LogLevel.FATAL, message)
  }
}

export default new Logger()
