import Util from '../Util.js';

class TrackModel {

    /**
     * @param {string} name
     * @param {string} image
     * @param {number} timestamp
     * @param {boolean} isCurrentlyPlaying
     * @param {ArtistModel} artistModel
     */
    constructor(name, image, timestamp, isCurrentlyPlaying, artistModel) {
        this.timestamp = timestamp;
        this.name = name;
        this.image = image;

        this.artist = artistModel;
        this.formattedDateTime = Util.timestampToFormattedDateTime(this.timestamp);
        this.searchQuery = (this.artist.name + ' - ' + this.name).replace(/ /g, '%20');
        this.isCurrentlyPlaying = isCurrentlyPlaying;
    }
}

export {TrackModel as default};
