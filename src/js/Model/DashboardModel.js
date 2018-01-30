import TrackModelFactory from '../Factory/TrackModelFactory';
import UserModelFactory from '../Factory/UserModelFactory';

class DashboardModel {

    constructor() {
        this.users = [];

        this.trackModelFactory = new TrackModelFactory();
        this.userModelFactory = new UserModelFactory();
    }
}