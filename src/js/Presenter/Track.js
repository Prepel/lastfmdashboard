import $ from 'jquery';

class Track {

    /**
     * @param {TrackModel} trackModel
     */
    constructor(trackModel) {
        const template = `<div class="col-12 track">
                <div class="track__image">
                    <img src="${trackModel.image}"/>
                </div>
                <div class="track__info">
                    <p>
                    ${trackModel.isCurrentlyPlaying.toString()}
                        <span class="track__info__date">
                            ${trackModel.formattedDateTime}
                        </span>
                        ${trackModel.artist.name} - ${trackModel.name}
                    </p>

                    <a href="spotify:search:${trackModel.searchQuery}" class="track__info__spotify"><i class="fa fa-spotify"></i></a>
                </div>
        </div>`;

        this.$el = $(template);
    }
}

export {Track as default};
