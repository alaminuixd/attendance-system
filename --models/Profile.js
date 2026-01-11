import { model, Schema } from "mongoose";
const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  avatar: String,
  profileStatus: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = model("Profile", userSchema);
export default Profile;
