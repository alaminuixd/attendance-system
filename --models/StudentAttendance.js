import { Schema, model } from "mongoose";

// - UserID
// - CreatedAt: Date Time
// - Admin attendanceId

const studentAttendanceSchema = new Schema({
  createdAt: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  adminAttendance: {
    type: Schema.Types.ObjectId,
    ref: "AdminAttendance",
  },
});

const StudentAttendance = model("StudentAttendance", studentAttendanceSchema);
export default StudentAttendance;
