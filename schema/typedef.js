// usually this file is named as Schema.js || Schema.config.js

import { gql } from "apollo-server";

const typeDefs = gql`
  type Users {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality
    friends: [Users!]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [Users!]
    user(id: ID!): Users!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = India
  }

  input UpdateUserName {
    id: ID!
    newUserName: String!
  }

  type Mutation {
    createUsers(input: CreateUserInput!): Users
    updateUsername(input: UpdateUserName!): Users
    deleteUsers(id: ID!): Users
  }

  enum Nationality {
    India
    Germany
    Korea
    US
    Chile
  }
`;

export { typeDefs };
