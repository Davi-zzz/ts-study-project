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
    type Sucess {
        sucess: Boolean
        name: String
        message: String
    }
    union QueryResult = User | Error | Sucess

    type Query {
        getAllUsers: [User!]
        logon(input: Login): QueryResult
    }
    
    type Mutation {
        createNewUser(input: CreateUserInput!): QueryResult
        updateUser(input: UpdateUserInput!): QueryResult
        deleteUser(input: ID!): QueryResult

    }
    input Login {
        email: String!
        password: String!
    }
    input UpdateUserInput {
        firstName: String
        lastName: String
        email: String
        age: Int
        password: String
        id: ID!
    }
    input CreateUserInput {
        firstName: String!
        lastName: String!
        email: String!
        age: Int!
        password: String!
    }
`;

