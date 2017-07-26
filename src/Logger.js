import storage from './storage';
import uuid from './util/uuid';



class Logger {
    constructor(namespace) {
        this.ns = namespace;
        this.pvid = uuid();
        this.logs = [];
    }

    info(data) {
        this.logs.push({
            t: Logger.INFO_LEVEL,
            d: data
        });
    }

    debug(data) {
        this.logs.push({
            t: Logger.DEBUG_LEVEL,
            d: data
        });
    }

    warn(data) {
        this.logs.push({
            t: Logger.WARN_LEVEL,
            d: data
        });
    }

    error(data) {
        this.logs.push({
            t: Logger.ERROR_LEVEL,
            d: data
        });
    }
}

Logger.ERROR_LEVEL = 0;
Logger.WARN_LEVEL = 1;
Logger.INFO_LEVEL = 2;
Logger.DEBUG_LEVEL = 3;

export default Logger;
