const express = require("express");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads/uploads/${file.originalname}`);
    // cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/upload", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  console.log("image", image);
  res.json({ image });
});

module.exports = router;
