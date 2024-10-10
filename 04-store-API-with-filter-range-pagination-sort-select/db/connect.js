import Mongoose from "mongoose";
const connectDB = (url) => {
  return Mongoose.connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
};

export default connectDB;
