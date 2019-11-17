const express = require("express");
const router = express.Router();
const { postRegister } = require("../controllers");
const { errorHandler } = require("../middleware");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Surf Shop - home" });
});

/** GET /register */
router.get("/register", (req, res) => {
  res.send("GET /register");
});

/** POST /register */
router.post("/register", errorHandler(postRegister));

/** GET /login */
router.get("/login", (req, res) => {
  res.send("GET /login");
});

/** POST /login */
router.post("/login", (req, res) => {
  res.send("POST /login");
});

/** GET /profile */
router.get("/profile", (req, res) => {
  res.send("GET /profile");
});

/** PUT /profile/:user_id */
router.put("/profile/:user_id", (req, res) => {
  res.send("PUT /profile/:user_id");
});

/** GET /forgot-pw */
router.get("/forgot-pw", (req, res) => {
  res.send("GET /forgot-pw");
});

/** PUT /forgot-pw */
router.put("/forgot-pw", (req, res) => {
  res.send("PUT /forgot-pw");
});

/** GET /reset-pw */
router.get("/reset-pw/:token", (req, res) => {
  res.send("GET /reset-pw/:token");
});

/** PUT /reset-pw */
router.put("/reset-pw/:token", (req, res) => {
  res.send("PUT /reset-pw/:token");
});

module.exports = router;
