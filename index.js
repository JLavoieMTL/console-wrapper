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
// Log levels
var TRACE = 0;
var DEBUG = 1;
var INFO = 2;
var WARN = 3;
var ERROR = 4;
var LEVELS = {
    trace: TRACE,
    debug: DEBUG,
    info: INFO,
    warn: WARN,
    error: ERROR
};
var Logger = /** @class */ (function () {
    function Logger(opt) {
        var level = LEVELS[opt.level ? opt.level : TRACE];
        this.options = opt;
        console.trace = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= TRACE) {
                if (opt && opt.trace && opt.trace.callback)
                    (_a = opt.trace).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.trace, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
        console.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= DEBUG) {
                if (opt && opt.debug && opt.debug.callback)
                    (_a = opt.debug).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.debug, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
        console.dir = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= DEBUG) {
                if (opt && opt.dir && opt.dir.callback)
                    (_a = opt.dir).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.dir, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
        console.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= INFO) {
                if (opt && opt.info && opt.info.callback)
                    (_a = opt.info).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.info, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
        console.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= WARN) {
                if (opt && opt.warn && opt.warn.callback)
                    (_a = opt.warn).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.warn, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
        console.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= ERROR) {
                if (opt && opt.error && opt.error.callback)
                    (_a = opt.error).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.error, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
        console.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= ERROR) {
                if (opt && opt.log && opt.log.callback)
                    (_a = opt.log).callback.apply(_a, args);
                return (_b = Function.prototype.bind).call.apply(_b, [console.log, console].concat(args));
            }
            else
                return function () { };
            var _a, _b;
        }();
    }
    return Logger;
}());
exports.Logger = Logger;
