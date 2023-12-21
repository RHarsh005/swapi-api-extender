const express = require("express");
const router = express.Router();

const { getData } = require("../handler/fetchData");

router.get("/", async (req, res) => {
  try {
    let data = await getData("/");
    res.json(data);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
