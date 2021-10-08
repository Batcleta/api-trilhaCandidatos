const path = require("path");

const multer = require("multer"),
  storage = multer.diskStorage({
    destination: "./src/assets/uploads/videos",
    filename: function (req, file, next) {
      next(null, req.body.fname);
    },
  }),
  upload = multer({ storage: storage }).single("data"),
  fs = require("fs");

module.exports = {
  store(req, res) {
    upload(req, res, (err) => {
      if (err) {
        console.log(" Deu merda" + err);
      } else {
        console.log(req.file);
        res.send("test");
      }
    });
  },
  findVideo(req, res) {
    const { videoName } = req.params;
    const videoFile = path.join(
      process.cwd(),
      `/src/assets/uploads/videos/${videoName}`
    );
    res.send(videoFile);
  },
};
