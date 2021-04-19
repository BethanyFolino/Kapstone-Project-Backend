const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => res.send("API running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
// app.use("/api/like", require("./routes/api/like"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
