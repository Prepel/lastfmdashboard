class TrackModel {

    constructor(name, image, timestamp, artistModel) {
        this.timestamp = timestamp;
        this.name = name;
        this.image = image;

        this.artist = artistModel;
    }

}

export {TrackModel as default};