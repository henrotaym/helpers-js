/**
 * Trying to execute given callback.
 * @param {Function} callback Callback to execute.
 * @returns {Promise<[Error|null, any|null]>}
 */
const trying = async (callback) => {
    try {
        const response = await callback();
        return [null, response];
    } catch (error) {
        return [error, null];
    }
}

module.exports = trying;