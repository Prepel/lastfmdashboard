import Config from './config.js';

class Util {


    /**
     * @param {number} timestamp
     * @returns {string}
     */
    static timestampToFormattedDateTime(timestamp) {
        const date = new Date(timestamp * 1000);
        let dateTime = date.getDate() + " " + Config.monthNames[date.getMonth()] + " " + date.getFullYear() + " ";
        dateTime += date.getHours() + ":" + (date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes());

        return dateTime;
    }

}

export {Util as default};
