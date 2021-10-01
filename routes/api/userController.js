const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const userData = require("../../models/user");
const jwt = require("jsonwebtoken");

userRouter.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new userData({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  res.send(await user.save());
});

userRouter.post("/login", async (req, res) => {
  const user = await userData.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(404).send({
      message: "user not found",
    });
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "invalid password",
    });
  }

  const token = jwt.sign({ _id: user.id }, "secret");

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.send({
    message: "success",
  });
});

userRouter.post("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, "secret");

    if (!claims) {
      return res.status(401).send({
        message: "Not Authenticatd",
      });
    }

    const user = await userData.findOne({
      _id: claims._id,
    });

    const { password, ...data } = await user.toJSON();

    res.send(data);
  } catch (event) {
    return res.status(401).send({
      message: "Not Authenticatd",
    });
  }
});

userRouter.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "success logout",
  });
});

module.exports = userRouter;
