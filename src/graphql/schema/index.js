const blogTypeDefs = require("./blogSchema");
const servicesTypeDefs = require("./servicesSchema");
const robotDialogueTypeDefs = require("./robotDialogueSchema");
const serviceContentTypeDefs = require("./serviceContentSchema");
const serviceProfitsTypeDefs = require("./serviceProfitsSchema");

const typeDefs = [
  blogTypeDefs,
  servicesTypeDefs,
  robotDialogueTypeDefs,
  serviceContentTypeDefs,
  serviceProfitsTypeDefs,
];

module.exports = typeDefs;
