export const authorizeMiddleWare = (req, res, next) => {
  const { user } = req.query;

  if (user === "john") {
    console.log(user);
    req.user = { name: "john" };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
