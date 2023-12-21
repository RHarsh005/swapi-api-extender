function modifyDataByQuery(data = [], key, value, type = "") {
  try {
    let typeToggle = false,
      equal = false,
      lessThan = false;

    if (type) {
      if (["lt", "lte", "gt", "gte"].includes(type)) {
        typeToggle = true;
        equal = ["lte", "gte"].includes(type);
        lessThan = ["lt", "lte"].includes(type) ? true : false;
      } else {
        throw new Error("Invalid query format or input");
      }
    }

    data = data.filter((ele) => {
      // lt, lte, gt, gte
      if (typeToggle) {
        let currVal = parseFloat(ele[key]);
        value = parseFloat(value);

        if (lessThan) {
          return equal ? currVal <= value : currVal < value;
        } else {
          return equal ? currVal >= value : currVal > value;
        }
      } else {
        return ele[key] === value;
      }
    });

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(
      JSON.stringify({
        error: "404",
        message: `Unexpected Error while applying ${key} query`,
      })
    );
  }
}

function sortByQuery(data = [], key, order) {
  try {
    data.sort(function comparator(a, b) {
      if (isNaN(a[key]) || isNaN(b[key])) return isNaN(a[key]) ? 1 : -1;

      if (order === "asc") return a[key] - b[key];
      else return b[key] - a[key];
    });
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(
      JSON.stringify({
        error: "404 - sorting error",
        message: "Getting Error while sorting the data",
      })
    );
  }
}

module.exports = { modifyDataByQuery, sortByQuery };
