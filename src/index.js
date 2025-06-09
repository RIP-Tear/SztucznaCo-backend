require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const typeDefsArray = require("./graphql/schema");
const resolversArray = require("./graphql/resolvers");

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

const PORT = process.env.PORT || 4000;

async function startServer() {
  const app = express();

  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.get("/", (req, res) => {
    res.send("Backend działa 🚀");
  });

  app.listen(PORT, () => {
    console.log(`✅ Railway PORT: ${PORT}`);
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
