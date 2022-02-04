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
    input ValidateRequest {
        token: String!
    }
    type AuthenticatedUser {
        token: String!
        user: User!
    }
    union QueryResultGeneric = User | Error | Sucess | AuthenticatedUser
    
    type Query {
        logon(input: Login): QueryResultGeneric
        getAllUsers(input: ValidateRequest): [User!]
    }
        
    type Mutation {
        createNewUser(input: CreateUserInput!): QueryResultGeneric
        updateUser(input: UpdateUserInput!): QueryResultGeneric
        deleteUser(input: ID!): QueryResultGeneric

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

