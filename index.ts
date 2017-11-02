/*
* Author: Joel Lavoie <joel.lavoie.ing@gmail.com>
* Date: November 2017
* License: ISC
* Description: this class is a wrapper around console that allow to show the proper level of logs
*              in the code without touching the console.x occurrences in the code and without having
*              inject a logger in all constructors that need some logging. Instantiate this code once
*              will overwrite all consoles.
*/

// Log levels
const TRACE = 0
const DEBUG = 1
const INFO = 2
const WARN = 3
const ERROR = 4

const LEVELS = {
    trace: TRACE,
    debug: DEBUG,
    info: INFO,
    warn: WARN,
    error: ERROR
}

class Logger {
    public options

    constructor(opt) {
        var level = LEVELS[ opt.level ? opt.level : TRACE ]
        this.options = opt

        console.trace = function (...args) {
            if (level <= TRACE) {
                if(opt && opt.trace && opt.trace.callback) opt.trace.callback(...args)
                return Function.prototype.bind.call(console.trace, console, ...args)
            }
            else return () => { }
        }()

        console.debug = function (...args) {
            if (level <= DEBUG) {
                if(opt && opt.debug && opt.debug.callback) opt.debug.callback(...args)
                return Function.prototype.bind.call(console.debug, console, ...args)
            }
            else return () => { }
        }()

        console.dir = function (...args) {
            if (level <= DEBUG) {
                if(opt && opt.dir && opt.dir.callback) opt.dir.callback(...args)
                return Function.prototype.bind.call(console.dir, console, ...args)
            }
            else return () => { }
        }()

        console.info = function (...args) {
            if (level <= INFO) {
                if(opt && opt.info && opt.info.callback) opt.info.callback(...args)
                return Function.prototype.bind.call(console.info, console, ...args)
            }
            else return () => { }
        }()

        console.warn = function (...args) {
            if (level <= WARN) {
                if(opt && opt.warn && opt.warn.callback) opt.warn.callback(...args)
                return Function.prototype.bind.call(console.warn, console, ...args)
            }
            else return () => { }
        }()

        console.error = function (...args) {
            if (level <= ERROR) {
                if(opt && opt.error && opt.error.callback) opt.error.callback(...args)
                return Function.prototype.bind.call(console.error, console, ...args)
            }
            else return () => { }
        }()

        console.log = function (...args) {
            if (level <= ERROR) {
                if(opt && opt.log && opt.log.callback) opt.log.callback(...args)
                return Function.prototype.bind.call(console.log, console, ...args)
            }
            else return () => { }
        }()

    }

}

export { Logger }