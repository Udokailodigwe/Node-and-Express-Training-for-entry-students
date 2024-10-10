import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import CONNECTDB from "./db/connect.js";
import productsRouter from "./routes/products.js";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href= "/api/v1/products">Product route</a>');
});

app.use("/api/v1/products", productsRouter);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await CONNECTDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
