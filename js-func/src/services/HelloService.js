const HelloService = (() => {
    return {
        /**
         * 
         * @param {string | undefined} _name 
         * @returns 
         */
        hello(_name) {
            const name = _name || 'world';
            return `Hello, ${name}!`;
        }
    }
})();

module.exports = { HelloService };
