import mongoose from "mongoose";

const connectDB = () => {
  const connected = mongoose.connect(process.env.MONGODB_URI);
  return connected;
};

export default connectDB;
