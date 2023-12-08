const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const { auth } = require("./middleware/auth");

const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());
const mongoose = require("mongoose");
const { auth } = require("./middleware/auth");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("몽고 연결!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

app.post("/api/users/login", (req, res) => {
  //이메일 찾기
  User.findOne({ email: req.body.email }).then((UserInfo) => {
    if (!UserInfo) {
      return res.json({
        loginSuccess: false,
        message: "해당 이메일은 없는 이메일 입니다.",
      });
    }

    UserInfo.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }

      UserInfo.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
