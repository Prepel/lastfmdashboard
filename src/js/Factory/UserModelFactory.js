import UserModel from '../Model/UserModel.js';

class UserModelFactory {

    constructor() {
        //todo: Use local image
        this.userImageFallbackUrl = 'http://via.placeholder.com/150x150';
    }

    /**
     * @param lastFMUser
     * @returns {UserModel}
     */
    getNewUser(lastFMUser) {

        const user = lastFMUser.user;

        const image = user.image[2]["#text"] || this.userImageFallbackUrl;
        const url = user.url;
        const name = user.name;

        return new UserModel(name, image, url);
    }

}

export {UserModelFactory as default};
