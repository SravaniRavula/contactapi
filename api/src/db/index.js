const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("api/src/db/db.json");
const db = low(adapter);

const createContactModel = require("./contact");
const createUserModel = require("./user");

module.exports = {
  models: {
    Contact: createContactModel(db),
    User: createUserModel(db),
  },
  db,
};
