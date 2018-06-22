import Track from './Track.js';
import * as pubSub from 'pubsub-js';
import $ from 'jquery';

class User {

    /**
     * @param {UserModel} userModel
     */
    constructor(userModel) {

        const template = `<div class="col-12 col-sm-3">
            <div class="user">
                <div class="user__avatar">
                    <img src="${userModel.image}" />
                </div>
                <div class="user__name"><a href="${userModel.url}" target="_blank">${userModel.name}</a></div>
            </div>

            <div class="row current-tracks"></div>
            <div class="row track-history"></div>
        </div>`;

        this.$el = $(template);

        this.currentTrack = this.$el.find('.current-tracks');
        this.trackHistory = this.$el.find('.track-history');
        this.userModel = userModel;

        this.bindListeners();
    }

    bindListeners() {
        this.renderCurrentTrackSubscription = pubSub.subscribe('renderCurrentTrack', (topic, userModel) => {
            if (userModel === this.userModel) {
                this.renderCurrentTrack();
            }
        });

        this.renderTrackHistorySubscription = pubSub.subscribe('renderTrackHistory', (topic, userModel) => {
            if (userModel === this.userModel) {
                this.renderTrackHistory();
            }
        });
    }

    renderCurrentTrack() {
        this.currentTrack.append(new Track(this.userModel.trackCurrentlyPlaying).$el);
    }

    renderTrackHistory() {
        this.userModel.trackList.forEach((track) => {
            this.trackHistory.append(new Track(track).$el);
        });
    }

    destroy() {
        this.$el.off().remove();
        pubSub.unsubscribe(this.renderCurrentTrackSubscription);
        pubSub.unsubscribe(this.renderTrackHistorySubscription);
    }
}

export {User as default};
