const { gql } = require("apollo-server-express");

const serviceProfitsTypeDefs = gql`
  type ProfitItem {
    uuid: String!
    uuidService: String
    profitsTitle: String
    profitsDescription: String
    profitsIndex: Int
    profitsButton: String
    profitsLink: String
  }

  type Query {
    serviceProfits: [ProfitItem]
  }

  type Mutation {
    addProfitItem(
      uuidService: String!
      profitsTitle: String
      profitsDescription: String
      profitsIndex: Int
      profitsButton: String
      profitsLink: String
    ): ProfitItem

    updateProfitItem(
      uuid: String!
      profitsTitle: String
      profitsDescription: String
      profitsIndex: Int
      profitsButton: String
      profitsLink: String
    ): ProfitItem

    deleteProfitItem(uuid: String!): Boolean
  }
`;

module.exports = serviceProfitsTypeDefs;
