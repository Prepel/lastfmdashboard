import User from './User.js';
import * as pubSub from 'pubsub-js';
import $ from 'jquery';

class Dashboard {

    /**
     * @param {DashboardModel} dashboardModel
     */
    constructor(dashboardModel) {
        this.dashboardModel = dashboardModel;
        this.userList = $('#users');
        this.userViews = [];
        this.bindListeners();
    }

    bindListeners() {
        pubSub.subscribe('usersLoaded', this.onUsersLoaded.bind(this));
    }

    onUsersLoaded() {
        this.dashboardModel.users.forEach((userModel) => {
            const userView = new User(userModel);
            this.userList.append(userView.$el);
            this.userViews.push(userView);
        });

        this.dashboardModel.updateLast5Tracks();
        this.dashboardModel.updateMostRecentTracks();

        setInterval(() => {
            this.dashboardModel.updateMostRecentTracks()
        }, this.dashboardModel.trackRefreshInterval);
    }
}

export {Dashboard as default};
