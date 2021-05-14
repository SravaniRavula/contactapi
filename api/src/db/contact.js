const nanoid = require("nanoid");

const createContactModel = (db) => {
  return {
    findMany(filter) {
      return db
        .get("contact")
        .filter(filter)
        .orderBy(["createdAt"], ["desc"])
        .value();
    },

    findOne(filter) {
      return db.get("contact").find(filter).value();
    },

    create(contact) {
      const newContact = { id: nanoid(), createdAt: Date.now(), ...contact };

      db.get("contact").push(newContact).write();

      return newContact;
    },
  };
};

module.exports = createContactModel;
