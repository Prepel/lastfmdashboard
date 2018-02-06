import AbstractPresenter from './AbstractPresenter';

class Dashboard extends AbstractPresenter {

    /**
     * @param {DashboardModel} dashboardModel
     */
    constructor(dashboardModel) {
        super(dashboardModel, '');
    }
}

export {Dashboard as default};
