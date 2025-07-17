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
    ): Service

    updateService(
      uuid: String!
      title: String
      description: String
      public: Boolean
      titleButton: String
      tooltip: String
      linkOrder: String
    ): Service

    deleteService(uuid: String!): Boolean
  }
`;

module.exports = servicesTypeDefs;
