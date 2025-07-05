const blogQuery = require("./blogQuery");
const servicesQuery = require("./servicesQuery");
const robotDialogueQuery = require("./robotDialogueQuery");

const blogMutation = require("./blogMutation");
const servicesMutation = require("./servicesMutation");
const robotDialogueMutation = require("./robotDialogueMutation");

const resolvers = {
  Query: {
    ...blogQuery,
    ...servicesQuery,
    ...robotDialogueQuery,
  },
  Mutation: {
    ...blogMutation,
    ...servicesMutation,
    ...robotDialogueMutation,
  }
};

module.exports = resolvers;
