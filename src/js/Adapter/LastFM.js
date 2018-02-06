class LastFM {

    constructor(lastFMConfiguration) {
        this.lastFM = new LastFM(lastFMConfiguration);
        this.lastFMCache = new LastFMCache();
    }

}

export {LastFM as default};
