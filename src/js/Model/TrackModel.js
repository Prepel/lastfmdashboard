class TrackModel {

    /**
     * @param {string} name
     * @param {string} image
     * @param {number} timestamp
     * @param {ArtistModel} artistModel
     */
    constructor(name, image, timestamp, artistModel) {
        this.timestamp = timestamp;
        this.name = name;
        this.image = image;

        this.artist = artistModel;
    }
}

export {TrackModel as default};
