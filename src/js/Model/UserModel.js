class UserModel {

    /**
     *
     * @param {string} name
     * @param {string} image
     * @param {string} url
     */
    constructor(name, image, url) {
        this.image = image;
        this.url = url;
        this.name = name;

        this.trackList = [];
        this.trackCurrentlyPlaying = null;
    }

    /**
     * @param {TrackModel} track
     */
    addTrack(track) {
        this.trackList.unshift(track);
    }

    /**
     * @param {TrackModel} track
     */
    setTrackCurrentlyPlaying(track) {
        this.trackCurrentlyPlaying = track;
    }
}

export {UserModel as default};
