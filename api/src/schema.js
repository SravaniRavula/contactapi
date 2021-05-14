const { gql } = require("apollo-server");

const typeDefs = gql`
 
  type User {
    id: ID!
    username: String!
    contacts: [Contact]!
  }
  type Contact {
    id: ID!
    firstName: String
    lastName: String
    email: String
    address:String
    phoneNumber:Int 
  }  
  input NewContactInput {
    firstName: String
    lastName: String
    email: String
    address:String
    phoneNumber:Int   
  }

  input ContactsInput {
    firstName: String
    lastName: String
    email: String
    address:String
    phoneNumber:Int
  }
 
  type Query {
    user: User!
    contacts(input: ContactsInput): [Contact]!
    contact(id: ID!): Contact!
  }
  type Mutation {
    addContact(input: NewContactInput!): Contact!
  }
`;

module.exports = typeDefs;
