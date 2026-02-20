import { Schema, model } from 'mongoose';

const adminAttendanceSchema = new Schema({
    timeLimit: Number,
    status: String,
});

const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);

export default AdminAttendance;
