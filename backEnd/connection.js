const mongoose = require("mongoose");

const URI =  "mongodb+srv://paandrikopoulos:<db_password>@firstcluster.so8mb.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster";


main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main();