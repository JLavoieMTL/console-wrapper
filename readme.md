# Requirements
This library will work with any typescript project such as:

 - nodeJS + typescript
 - Angular2 + typescript

# Description
I saw in many projects developers who use console.log, console.warn, etc.. everywhere in their code. Then, they want to push their code to production servers. But oh!! The logs! They are spreaded everywhere in the code and they are useful. Using a new logger library to replace all these logs can be painful and somewhat cumbersome. So why not just wrapping all console by a logger, that would let the code untouched ? Well, this is exactly what this library does! :)

This library is a wrapper around console that allow to show the proper level of logs in the code without touching the console.x occurrences in your code and without having to write a logger and inject it in all functions that need some logging. Instantiate this code once will allow you to set the log level without touching your console.X methods in your code.

# Log level
The following rules is applied:

**TRACE < DEBUG < INFO < WARN < ERROR**

So setting the log level to "trace" will show all the detailed logs. But obviously, in production, you probably prefer to only show a "warn" or "error" level.

In a more graphic way, here is how the selection rule works. In the following table, the vertical header shows the level of the logging request, designated by p, while the horizontal header shows effective level of the logger, designated by q. The intersection of the rows (level request) and columns (effective level) is the boolean resulting from the basic selection rule.
	![Levels](https://i.stack.imgur.com/Z5mag.png)

# How to use

At the beginning of your program, call the following:

    import { Logger } from 'console-logger'
    new Logger({ level: 'trace' })

# Available console methods
The following methods are wrapped:

 - trace
 - debug
 - info
 - warn
 - error
 - dir
 - log

# Examples

## Basic logger with log filtering
Suppose you're in prod, you may want to disable all logs:


    import { Logger } from 'console-logger'
    new Logger({ level: 'off' })

## Run additional logic when console methods are called

    import { Logger } from 'console-logger'
    const options = {
       level: 'off',
       info: {
	       callback: function(){
		       // so something here
		   }
	   },
	   error: {
	       callback: function(){
		       reportToCloud('blah', arguments); // send error to remote server
		   }
	   }
    }
    new Logger(options)

# Build

Run:

    tsc index.ts

to generate index.js