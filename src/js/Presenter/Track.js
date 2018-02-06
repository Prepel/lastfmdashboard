import AbstractPresenter from './AbstractPresenter';

class Track extends AbstractPresenter {

    /**
     * @param {TrackModel} trackModel
     */
    constructor(trackModel) {
        super(trackModel, '');
    }
}

export {Track as default};
