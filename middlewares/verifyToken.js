import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// token validation

export const verifyToken = (req, res, next) => {
  const token = req?.cookies?.access_token;

  if (!token) {
    return res.status(401).json({ error: "You are not logged in " });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(400, "Token is invalid"));
    req.user = user;

    next();
  });
};

//validate basic users

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

// validate college

export const verifyCollege = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "college" || req.user.role === "admin") {
      next();
    } else {
      return next(
        createError(403, "You do not have the permission to access this")
      );
    }
  });
};

// validate university

export const verifyUniversity = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "university" || req.user.role === "admin") {
      next();
    } else {
      return next(
        createError(403, "You don't have the permission to access this")
      );
    }
  });
};

// validate admin

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return next(
        createError(403, "You do not have permission to access this")
      );
    }
  });
};
