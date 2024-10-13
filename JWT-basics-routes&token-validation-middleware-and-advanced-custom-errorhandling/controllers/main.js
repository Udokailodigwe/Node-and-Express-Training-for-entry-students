import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(StatusCodes.CREATED).json({ msg: "User created", token });
};

const dashboard = async (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.status(StatusCodes.OK).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${number}`,
  });
};

export { login, dashboard };
