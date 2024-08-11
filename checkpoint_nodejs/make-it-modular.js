const filterFn = require("./mymodule");

filterFn(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    console.log(err);
  }
  list.forEach((element) => {
    console.log(element);
  });
});