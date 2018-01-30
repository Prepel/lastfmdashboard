import AbstractPresenter from './AbstractPresenter';

class Track extends AbstractPresenter {

    constructor(trackModel){
        super(trackModel, '');
    }
}

export {Track as default};