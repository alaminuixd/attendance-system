/**
 * Creates a standard Error object with an attached HTTP status code.
 *
 * @param {string} [message='Server Error!'] - Human-readable error message.
 * @param {number} [status=500] - HTTP status code associated with the error.
 * @returns {Error & { status: number, isOperational: boolean }}
 */
export default function createError(message = 'Server Error!', status = 500) {
    const error = new Error(message);
    error.status = Number.isInteger(status) ? status : 500;
    error.isOperational = true;
    return error;
}
