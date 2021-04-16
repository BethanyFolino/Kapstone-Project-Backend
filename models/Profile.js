const mongoose = require("mongoose");

// Build profile schema
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  bio: {
    type: String,
  },

  reviews: [
    {
      title: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      review: {
        type: String,
      },

      liked: {
        type: false,
      },

      description: {
        type: String,
      },
    },
  ],
  //   education: [
  //     {
  //       school: {
  //         type: String,
  //         required: true,
  //       },
  //       degree: {
  //         type: String,
  //         required: true,
  //       },
  //       fieldofstudy: {
  //         type: String,
  //         required: true,
  //       },
  //       from: {
  //         type: Date,
  //         required: true,
  //       },
  //       to: {
  //         type: Date,
  //       },
  //       current: {
  //         type: Boolean,
  //         default: true,
  //       },
  //       description: {
  //         type: String,
  //       },
  //     },
  //   ],

  date: {
    type: Date,
    defaulot: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
