import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function doHash(value, salt = 10) {
    try {
        return await bcrypt.hash(value, salt);
    } catch (error) {
        throw new Error(`Hashing failed! Error: ${error}`);
    }
}

export async function doHashCompare(value, hashedValue) {
    try {
        return await bcrypt.compare(value, hashedValue);
    } catch (error) {
        throw new Error(`Hashing comparison failed. Error: ${error}`);
    }
}

export function createHmac() {
    return crypto;
}
