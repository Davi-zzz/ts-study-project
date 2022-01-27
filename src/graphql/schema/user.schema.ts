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
    type Error {
        error: Boolean
        name: String
        message: String
    }
    type queryResult {
        data: TesteOlavo
    }
    union TesteOlavo = User | Error

    type Query {
        getAllUsers: [User!]!
    }
    type Mutation {
        createNewUser(input: createNewUserInput!): queryResult
    }

    input createNewUserInput {
        firstName: String!
        lastName: String!
        email: String!
        age: Int!
        password: String!
    }
`);

