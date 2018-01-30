import TrackModel from '../Model/TrackModel.js';
import ArtistModel from '../Model/ArtistModel.js';

class TrackModelFactory {

    getNewTrackModel(lastFMTrack) {

        const track = lastFMTrack[0];

        const trackName = track.name;
        const trackImage = track.image[3]['#text'];
        const trackTimestamp = track.date ? track.date.uts : Math.floor(Date.now() / 1000);

        const artistName = track.artist.name;
        const artistModel = new ArtistModel(artistName);

        return new TrackModel(trackName, trackImage, trackTimestamp, artistModel);
    }

}

export {TrackModelFactory as default};