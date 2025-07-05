const blogTypeDefs = require("./blogSchema");
const servicesTypeDefs = require("./servicesSchema");
const robotDialogueTypeDefs = require("./robotDialogueSchema");

const typeDefs = [
  blogTypeDefs,
  servicesTypeDefs,
  robotDialogueTypeDefs
];

module.exports = typeDefs;
