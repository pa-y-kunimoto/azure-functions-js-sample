const HelloService = (() => {
    return {
        /**
         * 
         * @param {string | undefined | null} _name 
         * @returns {string}
         */
        hello(_name) {
            const name = _name ?? 'world';
            return `Hello, ${name}!`;
        }
    }
})();

module.exports = { HelloService };
