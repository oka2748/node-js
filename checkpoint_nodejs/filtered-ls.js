const { readdir } = require("fs");
const path = require("path");

readdir(process.argv[2], function (err, list) {
  list.forEach((element) => {
    if (path.extname(element) === "." + process.argv[3]) {
      console.log(element);
    }
  });
});
