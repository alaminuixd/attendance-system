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

export const sanitizeData = (data, items = []) => {
    if (!data) return null;
    if (!Array.isArray(items)) {
        throw new Error('items must be an array of strings');
    }

    // 👇 if array, sanitize each element
    if (Array.isArray(data)) {
        return data.map((item) => sanitizeData(item, items));
    }

    const objData =
        typeof data.toObject === 'function' ? data.toObject() : { ...data };

    items.forEach((key) => delete objData[key]);
    return objData;
};

/* 
call 1: 
    data is not null [{...}, {...}] go next line
    items are Array so go next line
    data is Array so return data.map((item) => recursive(item/data, items=[item1]))
    objData = 

*/

/* export const sanitizeData = (obj, items = []) => {
    if (!obj) return null;
    if (!Array.isArray(items)) {
        throw new Error('items must be an array of strings');
    }
    const objData = obj.toObject ? obj.toObject() : { ...obj };
    items.forEach((item) => delete objData[item]);
    return objData;
};
 */
