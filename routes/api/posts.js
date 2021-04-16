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

// @route GET api/posts
// @desc Get all posts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Errors");
  }
})

// @route  GET api/posts/:id
// @desc   Get post by ID
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if(!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json(review);
  } catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.status(500).send("Server Errors");
  }
})

// @route  DELETE api/posts
// @desc   Delete a post
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if(!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    if(review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await review.remove();

    res.json({ msg: "Review removed" });
  } catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.status(500).send("Server Errors");
  }
})

module.exports = router;
