import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../modals/Users.js";
import { createError } from "../middlewares/error.js";

//register user function
export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const { password, confirmPassword, role, email, ...otherDetails } =
      req.body;

    if (password === confirmPassword) {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new User({
        ...otherDetails,
        password: hash,
        email,
        role: role || "basic",
      });

      await newUser.save();

      res.status(200).send("User has been created");
    } else {
      next(createError(401, "password does not match"));
    }
  } catch (error) {
    next(error);
  }
};

//login user function

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, role: user.role || "basic" },
      process.env.JWT
    );

    const { password, role, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};

//logout
export const logoutUser = async (req, res, next) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
};
