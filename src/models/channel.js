import mongoose from "mongoose";

const { Schema } = mongoose;

const channelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    password: String,
    rooms: [{ type: mongoose.Types.ObjectId, ref: "Room" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Channel", channelSchema);
