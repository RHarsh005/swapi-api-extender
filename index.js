const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

// Routers
const getAll = require("./routes/getAll");
const people = require("./routes/people");
const planets = require("./routes/planets");
const films = require("./routes/films");
const species = require("./routes/species");
const vehicles = require("./routes/vehicles");
const starships = require("./routes/starships");

app.use("/", getAll);
app.use("/people", people);
app.use("/planets", planets);
app.use("/films", films);
app.use("/species", species);
app.use("/vehicles", vehicles);
app.use("/starships", starships);

app.get("/*", (req, res) => {
  res.status(404).send({
    status: 404,
    message: "endpoint not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
