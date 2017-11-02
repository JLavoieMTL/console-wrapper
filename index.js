"use strict";
/*
* Author: Joel Lavoie <joel.lavoie.ing@gmail.com>
* Date: November 2017
* License: ISC
* Description: this class is a wrapper around console that allow to show the proper level of logs
*              in the code without touching the console.x occurrences in the code and without having
*              inject a logger in all constructors that need some logging. Instantiate this code once
*              will overwrite all consoles.
*/
exports.__esModule = true;
var _ = require("lodash");
// Log levels
var TRACE = 0;
var DEBUG = 1;
var INFO = 2;
var WARN = 3;
var ERROR = 4;
var OFF = 5;
var LEVELS = {
    trace: TRACE,
    debug: DEBUG,
    info: INFO,
    warn: WARN,
    error: ERROR,
    off: OFF
};
var Logger = /** @class */ (function () {
    function Logger(opt) {
        if (opt === void 0) { opt = {}; }
        this.options = {
            level: TRACE,
            trace: { callback: function () { }, forceCallback: false },
            debug: { callback: function () { }, forceCallback: false },
            dir: { callback: function () { }, forceCallback: false },
            info: { callback: function () { }, forceCallback: false },
            warn: { callback: function () { }, forceCallback: false },
            error: { callback: function () { }, forceCallback: false },
            log: { callback: function () { }, forceCallback: false }
        };
        try {
            if (!_.includes(['trace', 'debug', 'info', 'warn', 'error', 'off'], opt.level))
                throw new Error("bad level: " + opt.level);
            var level = LEVELS[opt.level ? opt.level : TRACE];
            _.merge(this.options, opt);
            // required to keep context
            var _this = this;
            console.trace = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.trace.forceCallback;
                if (force)
                    (_a = _this.options.trace).callback.apply(_a, args);
                if (level <= TRACE) {
                    if (!force)
                        (_b = _this.options.trace).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.trace, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
            console.debug = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.debug.forceCallback;
                if (force)
                    (_a = _this.options.debug).callback.apply(_a, args);
                if (level <= DEBUG) {
                    if (!force)
                        (_b = _this.options.debug).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.debug, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
            console.dir = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.dir.forceCallback;
                if (force)
                    (_a = _this.options.dir).callback.apply(_a, args);
                if (level <= DEBUG) {
                    if (!force)
                        (_b = _this.options.dir).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.dir, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
            console.info = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.info.forceCallback;
                if (force)
                    (_a = _this.options.info).callback.apply(_a, args);
                if (level <= INFO) {
                    if (!force)
                        (_b = _this.options.info).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.info, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
            console.warn = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.warn.forceCallback;
                if (force)
                    (_a = _this.options.warn).callback.apply(_a, args);
                if (level <= WARN) {
                    if (!force)
                        (_b = _this.options.warn).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.warn, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
            console.error = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.error.forceCallback;
                if (force)
                    (_a = _this.options.error).callback.apply(_a, args);
                if (level <= ERROR) {
                    if (!force)
                        (_b = _this.options.error).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.error, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
            console.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var force = _this.options.log.forceCallback;
                if (force)
                    (_a = _this.options.log).callback.apply(_a, args);
                if (level <= ERROR) {
                    if (!force)
                        (_b = _this.options.log).callback.apply(_b, args);
                    return (_c = Function.prototype.bind).call.apply(_c, [console.log, console].concat(args));
                }
                else
                    return function () { };
                var _a, _b, _c;
            }();
        }
        catch (e) {
            console.error(e);
        }
    }
    Logger.prototype.reloadOptions = function () {
        this.constructor(this.options);
    };
    return Logger;
}());
exports.Logger = Logger;
