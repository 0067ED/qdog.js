import Logger from './Logger';
import collect from './collect';

export default {
    install(namespace) {
        collect.install(new Logger(namespace));
    }
}
