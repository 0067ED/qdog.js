import storage from './storage';
import uuid from './util/uuid';

export default class Logger {
    constructor(namespace) {
        this.ns = namespace;
        this.pvid = uuid();
    }

    info(data) {
        storage.add(3, data);
    }

    debug(data) {
        storage.add(2, data);
    }

    warn(data) {
        storage.add(1, data);
    }

    error(data) {
        storage.add(0, data);
    }
}
