const express = require("express");
const router = express.Router();

const { getData } = require("../handler/fetchData");
const { queryHandler } = require("../handler/queryHandler");

const prop = "films";
router.get("/", async (req, res) => {
  try {
    let data = await getData(`${prop}`);
    const properties = {
      String: ["title", "director", "producer", "release_date"],
      Number: ["episode_id"],
    };

    data = await queryHandler(data.results, req.query, properties);
    res.json({
      status: "ok",
      length: data.length,
      data: data,
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await getData(`${prop}/${req.params.id}`);
    res.json({
      status: "ok",
      data: data,
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
