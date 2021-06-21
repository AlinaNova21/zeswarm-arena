// Use for HTML styling (Colors loosely match screeps_console)
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["SILLY"] = -1] = "SILLY";
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["ALERT"] = 2] = "ALERT";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
})(LogLevel || (LogLevel = {}));
const styles = {
    default: 'color: white; background-color: black',
    [LogLevel.SILLY]: 'color: blue',
    [LogLevel.DEBUG]: 'color: #008FAF',
    [LogLevel.INFO]: 'color: green',
    [LogLevel.ALERT]: 'color: #00BFAF',
    [LogLevel.WARN]: 'color: orange',
    [LogLevel.ERROR]: 'color: red',
    [LogLevel.FATAL]: 'color: yellow; background-color: red'
};
let y = 0;
let tick = 0;
export class Logger {
    constructor(prefix = '') {
        this.prefix = prefix ? prefix + ' ' : '';
        this.level = LogLevel.INFO;
    }
    static get LogLevel() {
        return LogLevel;
    }
    withPrefix(prefix) {
        return new Logger(prefix);
    }
    log(level, message) {
        if (level >= this.level) {
            if (typeof message === 'function') {
                message = message();
            }
            const style = styles[level] || styles.default;
            console.log(`[${level}] ${this.prefix}${message}`);
            // this._log(`<log severity="${level}" style="${style}">[${level}] ${this.prefix}${message}</log>`)
            // this.vlog(level, `[${level}] ${this.prefix} ${message}`)
        }
    }
    debug(message) {
        this.log(LogLevel.DEBUG, message);
    }
    info(message) {
        this.log(LogLevel.INFO, message);
    }
    warn(message) {
        this.log(LogLevel.WARN, message);
    }
    alert(message) {
        this.log(LogLevel.ALERT, message);
    }
    error(message) {
        if (message instanceof Error) {
            message = message.stack;
            // message = ErrorMapper.map(message)
        }
        this.log(LogLevel.ERROR, message);
    }
    fatal(message) {
        this.log(LogLevel.FATAL, message);
    }
}
export default new Logger();
