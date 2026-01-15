import User from '../models/User.js';
/**
 * ===============================
 * FIND USER BY PROPERTY
 * ===============================
 * Generic database helper to find a user
 * by any field (email, _id, etc.)
 */
export const findUserByProperty = (key, value) => {
    if (key === '_id') {
        return User.findById(value); // ✅ correct
    }
    return User.findOne({ [key]: value });
};

/**
 * ===============================
 * CREATE NEW USER
 * ===============================
 * Registers a new user in the database.
 * - Creates a new User document
 * - Saves it to MongoDB
 * NOTE: Password must already be hashed
 */
export const createNewUser = ({ name, email, password }) => {
    const user = new User({ name, email, password });
    return user.save();
};
