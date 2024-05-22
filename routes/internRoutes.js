const express = require("express");
const router = express.Router();
const {
  getAllInterns,
  createIntern,
} = require("../controllers/internController");
const multer = require("multer");
const path = require("path");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", getAllInterns);
router.post("/", upload.single("resume"), createIntern);

module.exports = router;
