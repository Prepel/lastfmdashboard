import AbstractPresenter from './AbstractPresenter';

class User extends AbstractPresenter {

    constructor(userModel){
        super(userModel, '');
    }

}

export {User as default};