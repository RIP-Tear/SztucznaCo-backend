const { gql } = require("apollo-server-express");

const servicesTypeDefs = gql`
  type Service {
    id: ID!
    uuid: String!
    createdAt: String
    title: String
    description: String
    public: Boolean
    content: [String]
    contentIcon: [String]
    profitsTitle: [String]
    profitsDescription: [String]
    tooltip: String
  }

  type Query {
    services: [Service]
  }

  type Mutation {
    addService(
      title: String
      description: String
      public: Boolean
      content: [String]
      contentIcon: [String]
      profitsTitle: [String]
      profitsDescription: [String]
      tooltip: String
    ): Service

    updateService(
      uuid: String!
      title: String
      description: String
      public: Boolean
      content: [String]
      contentIcon: [String]
      profitsTitle: [String]
      profitsDescription: [String]
      tooltip: String
    ): Service

    deleteService(uuid: String!): Boolean
  }
`;

module.exports = servicesTypeDefs;
