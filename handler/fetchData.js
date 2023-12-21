const axios = require("axios");

async function getData(arg) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://swapi.dev/api/${arg}`,
    headers: {},
  };

  return (data = await axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      const obj = {
        code: err.response.status,
        detail: err.response.statusText,
        message: "error while fetching data from swapi.dev",
      };

      throw new Error(JSON.stringify(obj));
    }));
}

exports.getData = getData;
