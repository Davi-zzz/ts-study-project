
import { gql } from "@apollo/server";

export const typeDefs = gql`
    
  
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
    type UserSucessfullyCreated {
        user: User
    }
    type UserErrorToBeCreated {
        user: User
        message: Error
    }
    union QueryResult = User | Error

    type Query {
        getAllUsers: [User!]
    }
    
    type Mutation {
        createNewUser(input: createNewUserInput!): QueryResult
    }

    input createNewUserInput {
        firstName: String!
        lastName: String!
        email: String!
        age: Int!
        password: String!
    }
`;

