import TrackModel from '../Model/TrackModel.js';
import ArtistModel from '../Model/ArtistModel.js';

class TrackModelFactory {

    /**
     * @param lastFMTrack
     * @returns {TrackModel}
     */
    getNewTrackModel(lastFMTrack) {

        const track = lastFMTrack;

        const trackName = track.name;
        const trackImage = track.image[3]['#text'];
        const trackTimestamp = track.date ? track.date.uts : Math.floor(Date.now() / 1000);
        const trackIsCurrentyPlaying = track["@attr"] !== 'undefined';

        const artistName = track.artist.name;
        const artistModel = new ArtistModel(artistName);

        return new TrackModel(trackName, trackImage, trackTimestamp, trackIsCurrentyPlaying, artistModel);
    }

}

export {TrackModelFactory as default};
