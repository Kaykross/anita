const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const localDB = process.env.MONGODB_LOCAL;
const atlasDB = process.env.MONGODB_ATLAS;

function DBConnection() {
  const db = mongoose.connect(atlasDB);
  db.then(() => console.log("Mongodb Data Connected successfully"));
  db.catch((err) => console.log(err));
}

module.exports = DBConnection;
