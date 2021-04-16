const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Review = require("../../models/Reviews");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route POST api/posts
// @desc Create a review
// @access Private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errprs: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newReview = new Review({
        text: req.body.text,
        name: user.name,
        user: req.user.id,
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Errors");
    }
  }
);

module.exports = router;
