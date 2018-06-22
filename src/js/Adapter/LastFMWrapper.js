import LastFMCache from '../lastfm.api.cache.js';
import LastFM from '../lastfm.api.js';

class LastFMWrapper {

    constructor(lastFMConfiguration) {
        lastFMConfiguration.cache = new LastFMCache();
        this.lastFM = new LastFM(lastFMConfiguration);
    }

}

export {LastFMWrapper as default};
