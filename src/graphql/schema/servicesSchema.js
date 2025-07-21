const { gql } = require("apollo-server-express");

const servicesTypeDefs = gql`
  type Service {
    id: ID!
    uuid: String!
    createdAt: String
    title: String
    description: String
    public: Boolean
    titleButton: String
    tooltip: String
    linkOrder: String
    profitsButton: String
    profitsLink: String
  }

  type Query {
    services: [Service]
  }

  type Mutation {
    addService(
      uuid: String!
      title: String
      description: String
      public: Boolean
      titleButton: String
      tooltip: String
      linkOrder: String
      profitsButton: String
      profitsLink: String
    ): Service

    updateService(
      uuid: String!
      title: String
      description: String
      public: Boolean
      titleButton: String
      tooltip: String
      linkOrder: String
      profitsButton: String
      profitsLink: String
    ): Service

    deleteService(uuid: String!): Boolean
  }
`;

module.exports = servicesTypeDefs;
