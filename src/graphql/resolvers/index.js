const blogQuery = require("./blogQuery");
const servicesQuery = require("./servicesQuery");
const robotDialogueQuery = require("./robotDialogueQuery");
const serviceContentQuery = require("./serviceContentQuery");
const serviceProfitsQuery = require("./serviceProfitsQuery");

const blogMutation = require("./blogMutation");
const servicesMutation = require("./servicesMutation");
const robotDialogueMutation = require("./robotDialogueMutation");
const serviceContentMutation = require("./serviceContentMutation");
const serviceProfitsMutation = require("./serviceProfitsMutation");

const resolvers = {
  Query: {
    ...blogQuery,
    ...servicesQuery,
    ...robotDialogueQuery,
    ...serviceContentQuery,
    ...serviceProfitsQuery,
  },
  Mutation: {
    ...blogMutation,
    ...servicesMutation,
    ...robotDialogueMutation,
    ...serviceContentMutation,
    ...serviceProfitsMutation,
  },
};

module.exports = resolvers;
