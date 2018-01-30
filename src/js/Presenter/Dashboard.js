import AbstractPresenter from './AbstractPresenter';

class Dashboard extends AbstractPresenter {

    constructor(dashboardModel) {
        super(dashboardModel, '');
    }
}

export {Dashboard as default};