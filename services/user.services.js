import User from '../models/User.js';
import createError from '../utils/create.error.js';

export const findUsers = () => {
    return User.find();
};

/**
 * ===============================
 * FIND USER BY PROPERTY
 * ===============================
 * Generic database helper to find a user by any field.
 *
 * Example usage:
 * ```js
 * const user = await findUserByProperty('email', 'test@example.com');
 * ```
 *
 * @param {string} key - The field name to search by (e.g., '_id', 'email').
 * @param {any} value - The value to search for.
 * @returns {Promise<User|null>}
 * Resolves to the Mongoose User document if found, otherwise `null`.
 *
 * Notes:
 * - If `key` is '_id', it uses `User.findById(value)` internally.
 * - For any other key, it uses `User.findOne({ [key]: value })`.
 */
export const findUserByProperty = (key, value) => {
    if (key === '_id') {
        return User.findById(value); // returns Promise<User|null>
    }
    return User.findOne({ [key]: value }); // returns Promise<User|null>
};

/**
 * ===============================
 * CREATE NEW USER
 * ===============================
 * Registers a new user in the database.
 *
 * Example usage:
 * ```js
 * const newUser = await createNewUser({ name: 'Alice', email: 'alice@test.com', password: hashedPassword });
 * ```
 *
 * @param {Object} param0 - User details.
 * @param {string} param0.name - Name of the user.
 * @param {string} param0.email - Email of the user.
 * @param {string} param0.password - Hashed password of the user.
 * @returns {Promise<User>}
 * Resolves to the newly created Mongoose User document after saving to the database.
 *
 * Notes:
 * - Password must be hashed before calling this function.
 * - Internally creates a new `User` instance and calls `.save()` which returns a Promise.
 */
export const createNewUser = ({
    name,
    email,
    password,
    roles,
    accountStatus,
}) => {
    const user = new User({
        name,
        email,
        password,
        roles,
        accountStatus,
    });
    return user.save(); // returns Promise<User>
};

/**
 * Updates a user document by its ID.
 *
 * @param {string} id - The unique identifier of the user to update.
 * @param {object} data - Fields to update, typically derived from the request body.
 * @returns {Promise<User|null>} A promise that resolves to the updated user document,
 * or null if no user is found with the given ID.
 */
export const updateUser = async (id, data) => {
    const user = await findUserByProperty('email', data.email);
    // if (user && user._id !== id) throw createError('Email already in use', 400);
    if (user) throw createError('Email already in use', 400);
    return User.findByIdAndUpdate(id, { ...data }, { new: true });
};

export const deleteUserService = (userId) => {
    const user = findUserByProperty('_id', userId);
    if (!user) throw createError('User not found!', 404);
    return user.deleteOne();
};

export default {
    findUsers,
    findUserByProperty,
    createNewUser,
    updateUser,
    deleteUserService,
};
