import { buildSchema } from "graphql";

export var schema = buildSchema(`
  
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        email: String!
        password: String!
    }
    type Query {
        getAllUsers: [User!]!
    }
    type Mutation {
        createNewUser(input: createNewUserInput!): User!
    }
    type createNewUserInput {
        firstName: String!
        lastName: String!
        age: Int!
        email: String!
        password: String!
    }
`);

