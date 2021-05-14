module.exports = {
  Query: {
    contacts(_, { input }, { models }) {
      return models.Contact.findMany(input || {});
    },
    contact(_, { id }, { models }) {
      return models.Contact.findOne({ id });
    },
    user(_, __, { models }) {
      return models.User.findOne();
    }
  },
  Mutation: {
    addContact(_, { input }, { models, user }) {
      const contact = models.Contact.create({ ...input, user: user.id });
      return contact;
    },
  },
  User: {
    contacts(user, _, { models }) {
      return models.Contact.findMany({ user: user.id });
    },
  },
};
