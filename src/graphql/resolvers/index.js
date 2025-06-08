const GraphQLJSON = require("graphql-type-json");

const blogQuery = require("./blogQuery");
const servicesQuery = require("./servicesQuery");

const blogMutation = require("./blogMutation");
const servicesMutation = require("./servicesMutation");

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    ...blogQuery,
    ...servicesQuery
  },
  Mutation: {
    ...blogMutation,
    ...servicesMutation
  }
};

module.exports = resolvers;
