/**
 * Removes sensitive fields from an object
 * before sending it to the client
 *
 * @param {Object|Document} user - Mongoose document or plain object
 * @param {string[]} items - Fields to remove
 * @returns {Object|null}
 */
export const sanitizeUser = (user, items = []) => {
    if (!user) return null;

    if (!Array.isArray(items)) {
        throw new Error('items must be an array of strings');
    }
    // Convert Mongoose document → plain object if needed
    const userObj = user.toObject ? user.toObject() : { ...user };

    // Remove specified fields
    items.forEach((item) => {
        delete userObj[item];
    });

    return userObj;
};
