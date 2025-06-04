const { gql } = require("apollo-server-express");
const testDataTypeDefs = require("./testDataSchema");

const typeDefs = [
  testDataTypeDefs
  // tutaj potem będziesz dodawać kolejne: userTypeDefs, postTypeDefs itd.
];

module.exports = typeDefs;
