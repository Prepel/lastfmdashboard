class ClientCache {

    /**
     * @param {string} key
     * @param {string} content
     */
    static setCacheItem(key, content) {
        localStorage.setItem(key, content);
    }

    /**
     * @param {string} key
     */
    static getCacheItem(key) {
        localStorage.getItem(key);
    }

    /**
     * @param {string} key
     */
    static removeCacheItem(key) {
        localStorage.removeItem(key);
    }

}

export {ClientCache as default};