const dbs = require("./database/db");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3000;
const userData = require("./routes/users");
const video = require("./routes/UploadVideo");
const audio = require("./routes/Audio");
const draft = require("./routes/Draft");

app.use(bodyparser.urlencoded({ urlencoded: true, extended: true }));
app.use(bodyparser.json({ extended: true }));

app.use("/api", userData);
app.use("/api/video", video);
app.use("/api/audio", audio);
app.use("/api/draft", draft);
app.use("/profile", express.static("images"));
app.use("/profileimages", express.static("profileimages"));

app.listen(PORT, (req, res) => {
  console.log(`Server running at port:${PORT}`);
});
