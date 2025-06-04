const { gql } = require("apollo-server-express");

const testDataTypeDefs = gql`
  type TestData {
    id: ID!
    name: String!
  }

  type Query {
    testData: [TestData]
  }

  type Mutation {
    addTestData(name: String!): TestData
  }
`;

module.exports = testDataTypeDefs;
