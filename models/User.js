import { model, Schema } from 'mongoose';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name should be at least 3 characters.'],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email.`,
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'Password must be min 4 characters.'],
        maxlength: [120, "Password can't exceed 120 characters."],
    },
    roles: {
        type: [String],
        required: true,
        default: ['STUDENT'],
    },
    accountStatus: {
        type: String,
        enum: ['PENDING', 'ACTIVE', 'REJECTED'],
        default: 'PENDING',
        required: true,
    },
});

const User = model('User', userSchema);
export default User;
