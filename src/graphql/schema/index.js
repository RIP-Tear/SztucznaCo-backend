const blogTypeDefs = require("./blogSchema");
const servicesTypeDefs = require("./servicesSchema");

const typeDefs = [
  blogTypeDefs,
  servicesTypeDefs
];

module.exports = typeDefs;
