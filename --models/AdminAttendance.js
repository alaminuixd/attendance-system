import { Schema, model } from "mongoose";

const adminAttendanceSchema = new Schema({
  timeLimig: Number,
  status: String,
  createdAt: Date,
});

const AdminAttendance = model("AdminAttendance", adminAttendanceSchema);

export default AdminAttendance;
