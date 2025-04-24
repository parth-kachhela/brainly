import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const tagSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
});

const linkSchema = new Schema({
  hash: { type: String, require: true },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const contentTypes = ["image", "video", "article", "audio"]; // Extend as needed
const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const UserModel = model("User", UserSchema);
const tagModel = model("Tag", tagSchema);
const linkModel = model("Link", linkSchema);
const contenModel = model("Content", contentSchema);

export { UserModel, tagModel, linkModel, contenModel };
