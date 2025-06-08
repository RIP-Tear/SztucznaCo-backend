const blogQuery = require("./blogQuery");
const servicesQuery = require("./servicesQuery");

const blogMutation = require("./blogMutation");
const servicesMutation = require("./servicesMutation");

const resolvers = {
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
