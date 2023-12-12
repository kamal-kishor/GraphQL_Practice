import { ApolloServer } from "apollo-server";
// import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema/typedef.js";
import { resolvers } from "./schema/resolver.js";
// const { ApolloServer } = require("@apollo-server");
// const { typeDefs } = require("./schema/typedef");
// const { resolvers } = require("./schema/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server Listening on port no :${url}`);
  })

  .catch((error) => {
    console.error("Error starting the server:", error);
  });

// const typeDefs = `#graphql

//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopin",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ];

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);
