import { model, Schema } from 'mongoose';
const adminAttendanceSchema = new Schema(
    {
        timeLimit: {
            type: Number,
            required: true,
            max: 30,
            min: 1,
            default: 5,
        },
        status: {
            type: String,
            required: true,
            enum: ['RUNNING', 'COMPLETED'],
            default: 'RUNNING',
        },
    },
    { timestamps: true }
);
// https://youtu.be/A5S7mWxqs2s?list=PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl&t=823
const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);
export default AdminAttendance;
