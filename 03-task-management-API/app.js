import express from "express";
import tasks from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//route
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const Port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(Port, console.log(`app is listening on port ${Port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
