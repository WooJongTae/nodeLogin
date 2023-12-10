const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// new 뭐징
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: { type: String },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});
//이부분은 다시 볼 필요가 있음
userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      console.log("salt", salt);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
  //   if (err) {
  //     return cb(err);
  //   }

  //   cb(null, isMatch);
  // });

  bcrypt
    .compare(plainPassword, this.password)
    .then((isMatch) => {
      return cb(null, isMatch);
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

userSchema.methods.generateToken = function (cb) {
  let user = this;
  let token = jwt.sign(user._id.toHexString(), "secretToken");

  user.token = token;
  // user.save(function (err, user) {
  //   if (err) {
  //     return cb(err);
  //   }
  //   cb(null, user);
  // });
  user
    .save()
    .then(() => {
      return cb(null, user);
    })
    .catch((err) => {
      return cb(err);
    });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  jwt.verify(token, "secretToken", function (err, decoded) {
    user
      .findOne({ _id: decoded, token: token })
      .then((user) => {
        cb(null, user);
      })
      .catch((err) => {
        return cb(err);
      });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
