const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Like = require("../../models/Like");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route POST api/likes
// @desc Like a movie
// @access PRivate
<<<<<<< HEAD
router.post(
  "/",
  [auth, [check("imbdID", "movieId not present")],],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newLike = new Like({
        userid: req.user.id,
        name: user.name,
        imdbID: req.body.imdbID,
      });
=======
// router.post(
//   "/",
//   [auth, [check("imbdID", "movieId not present")]],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const user = await User.findById(req.user.id).select("-password");
//       const existingLike = await Like.find({ imdbID: req.body.imdbID });
//       if (existingLike === -1) {
//         const newLike = new Like({
//           imdbID: req.body.imdbID,
//           users: [user.id],
//         });
>>>>>>> 6262ac0398a592edccc3544eb74556012ca1473d

//         const like = await newLike.save();
//       } else {
//         existingLike = {
//           ...existingLike,
//           users: [...existingLike.users, user.id],
//         };

//         const like = await existingLike.save();
//       }

//       res.json(like);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Errors");
//     }
//   }
// );

module.exports = router;
