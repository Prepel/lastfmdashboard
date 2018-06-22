import TrackModelFactory from '../Factory/TrackModelFactory.js';
import UserModelFactory from '../Factory/UserModelFactory.js';
import LastFMWrapper from '../Adapter/LastFMWrapper.js';
import Config from '../config.js';
import * as pubSub from 'pubsub-js';

class DashboardModel {

    constructor() {
        this.lastFMWrapper = new LastFMWrapper({
            apiKey: Config.apiKey,
            apiSecret: Config.apiSecret
        });

        this.trackModelFactory = new TrackModelFactory();
        this.userModelFactory = new UserModelFactory();
        this.trackRefreshInterval = Config.refreshRate;
        this.users = [];

        Array.from(Config.users).forEach((userName) => {
            this.lastFMWrapper.lastFM.user.getInfo({user: userName}, {
                success: (userData) => {
                    this.users.push(this.userModelFactory.getNewUser(userData));
                    if (this.users.length === Config.users.length) {
                        pubSub.publish('usersLoaded');
                    }
                }
            })
        });

    }

    updateLast5Tracks() {
        this.users.forEach((userModel) => {
            this.lastFMWrapper.lastFM.user.getRecentTracks({user: userModel.name, limit: 5, extended: 1}, {
                success: (track) => {
                    track.recenttracks.track.shift();
                    track.recenttracks.track.reverse();
                    track.recenttracks.track.forEach((trackData) => {
                        userModel.addTrack(this.trackModelFactory.getNewTrackModel(trackData));
                        pubSub.publish('renderTrackHistory', userModel);
                    });
                }
            });
        });
    }

    updateMostRecentTracks() {
        this.users.forEach((userModel) => {
            this.lastFMWrapper.lastFM.user.getRecentTracks({user: userModel.name, limit: 1, extended: 1}, {
                success: (track) => {
                    userModel.setTrackCurrentlyPlaying(this.trackModelFactory.getNewTrackModel(track.recenttracks.track[0]));
                    pubSub.publish('renderCurrentTrack', userModel);
                }
            });
        });
    }

}

export {DashboardModel as default};
