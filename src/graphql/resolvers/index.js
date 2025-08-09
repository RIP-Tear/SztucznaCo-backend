const blogQuery = require("./blogQuery");
const servicesQuery = require("./servicesQuery");
const robotDialogueQuery = require("./robotDialogueQuery");
const serviceContentQuery = require("./serviceContentQuery");
const serviceProfitsQuery = require("./serviceProfitsQuery");
const subpagesQuery = require("./subpagesQuery");

const blogMutation = require("./blogMutation");
const servicesMutation = require("./servicesMutation");
const robotDialogueMutation = require("./robotDialogueMutation");
const serviceContentMutation = require("./serviceContentMutation");
const serviceProfitsMutation = require("./serviceProfitsMutation");
const subpagesMutation = require("./subpagesMutation");

const resolvers = {
  Query: {
    ...blogQuery,
    ...servicesQuery,
    ...robotDialogueQuery,
    ...serviceContentQuery,
    ...serviceProfitsQuery,
    ...subpagesQuery,
  },
  Mutation: {
    ...blogMutation,
    ...servicesMutation,
    ...robotDialogueMutation,
    ...serviceContentMutation,
    ...serviceProfitsMutation,
    ...subpagesMutation,
  },
};

module.exports = resolvers;
