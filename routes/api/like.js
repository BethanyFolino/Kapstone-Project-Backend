const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Like = require("../../models/Like");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route POST api/likes
// @desc Like a movie
// @access PRtivate
router.post(
  "/",
  auth,
  [check("imbdID", "movieId not present")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newLike = new Like({
        liked: true,
        name: user.name,
        user: req.user.id,
        imdbID: req.body.imdbID,
      });

      const like = await newLike.save();
      res.json(like);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Errors");
    }
  }
);
