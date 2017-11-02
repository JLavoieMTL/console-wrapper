/*
* Author: Joel Lavoie <joel.lavoie.ing@gmail.com>
* Date: November 2017
* License: ISC
* Description: this class is a wrapper around console that allow to show the proper level of logs
*              in the code without touching the console.x occurrences in the code and without having
*              inject a logger in all constructors that need some logging. Instantiate this code once
*              will overwrite all consoles.
*/

import * as _ from 'lodash'

// Log levels
const TRACE = 0
const DEBUG = 1
const INFO = 2
const WARN = 3
const ERROR = 4
const OFF = 5

const LEVELS = {
    trace: TRACE,
    debug: DEBUG,
    info: INFO,
    warn: WARN,
    error: ERROR,
    off: OFF
}

class Logger {
    public options = {
        level: TRACE,
        trace: { callback: function(){}, forceCallback: false },
        debug: { callback: function(){}, forceCallback: false },
        dir:   { callback: function(){}, forceCallback: false },
        info:  { callback: function(){}, forceCallback: false },
        warn:  { callback: function(){}, forceCallback: false },
        error: { callback: function(){}, forceCallback: false },
        log:   { callback: function(){}, forceCallback: false }
    }

    constructor(opt:any = {}) {
        try {
            if(!_.includes(['trace', 'debug', 'info', 'warn', 'error', 'off'], opt.level)) throw new Error("bad level: " + opt.level)
            var level = LEVELS[ opt.level ? opt.level : TRACE ]
            _.merge(this.options, opt)

            // required to keep context
            var _this = this

            console.trace = function (...args) {
                let force = _this.options.trace.forceCallback
                if(force) _this.options.trace.callback(...args)
                if (level <= TRACE) {
                    if(!force) _this.options.trace.callback(...args)
                    return Function.prototype.bind.call(console.trace, console, ...args)
                }
                else return () => { }
            }()

            console.debug = function (...args) {
                let force = _this.options.debug.forceCallback
                if(force) _this.options.debug.callback(...args)
                if (level <= DEBUG) {
                    if(!force) _this.options.debug.callback(...args)
                    return Function.prototype.bind.call(console.debug, console, ...args)
                }
                else return () => { }
            }()

            console.dir = function (...args) {
                let force = _this.options.dir.forceCallback
                if(force) _this.options.dir.callback(...args)
                if (level <= DEBUG) {
                    if(!force) _this.options.dir.callback(...args)
                    return Function.prototype.bind.call(console.dir, console, ...args)
                }
                else return () => { }
            }()

            console.info = function (...args) {
                let force = _this.options.info.forceCallback
                if(force) _this.options.info.callback(...args)
                if (level <= INFO) {
                    if(!force) _this.options.info.callback(...args)
                    return Function.prototype.bind.call(console.info, console, ...args)
                }
                else return () => { }
            }()

            console.warn = function (...args) {
                let force = _this.options.warn.forceCallback
                if(force) _this.options.warn.callback(...args)
                if (level <= WARN) {
                    if(!force) _this.options.warn.callback(...args)
                    return Function.prototype.bind.call(console.warn, console, ...args)
                }
                else return () => { }
            }()

            console.error = function (...args) {
                let force = _this.options.error.forceCallback
                if(force) _this.options.error.callback(...args)
                if (level <= ERROR) {
                    if(!force) _this.options.error.callback(...args)
                    return Function.prototype.bind.call(console.error, console, ...args)
                }
                else return () => { }
            }()

            console.log = function (...args) {
                let force = _this.options.log.forceCallback
                if(force) _this.options.log.callback(...args)
                if (level <= ERROR) {
                    if(!force) _this.options.log.callback(...args)
                    return Function.prototype.bind.call(console.log, console, ...args)
                }
                else return () => { }
            }()
        }
        catch(e){
            console.error(e)
        }

    }

    reloadOptions() {
        this.constructor(this.options)
    }

}

export { Logger }