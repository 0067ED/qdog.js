import error from './error';
import vue from './vue';

export default {
    install(logger) {
        error.install(logger);
        vue.install(logger);
    }
}
