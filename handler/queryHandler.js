const { modifyDataByQuery, sortByQuery } = require("./dataModifier");

async function queryHandler(data = [], query = {}, properties = {}) {
  try {
    for (let key of properties.String) {
      if (query[key]) {
        data = modifyDataByQuery(data, key, query[key]);
      }
    }

    for (let key of properties.Number) {
      if (query[key]) {
        let value = query[key];
        let type = "";
        if (value.charAt(0) == "[") {
          let end = value.indexOf("]");
          type = value.substring(1, end).toLowerCase();
          console.log(type);
          if (!["lt", "lte", "gt", "gte"].includes(type)) {
            type = "";
          } else {
            value = value.substring(end + 1);
          }
        }

        data = modifyDataByQuery(data, key, value, type);
      }
    }

    if (query["sortby"]) {
      let key = query["sortby"];
      let order = "asc";

      if (
        !properties.Number.includes(key) ||
        (query["order"] !== undefined && !["asc", "desc"].includes(query["order"]))
      ) {
        throw new Error(
          JSON.stringify({
            error: "404 - sort query error",
            message:
              "Either property doesn't support for sortby Or wrong type of order value parse",
          })
        );
      }

      if (query["order"]) order = query["order"];
      data = sortByQuery(data, key, order);
    }

    return data;
  } catch (err) {
    throw err;
  }
}

exports.queryHandler = queryHandler;
