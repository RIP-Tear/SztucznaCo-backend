const { gql } = require("apollo-server-express");

const servicesTypeDefs = gql`
  scalar JSON

  type Service {
    id: ID!
    uuid: String!
    createdAt: String
    title: String
    description: String
    public: Boolean
    content: JSON
    contentIcon: JSON
    profitsTitle: JSON
    profitsDescription: JSON
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
      content: JSON
      contentIcon: JSON
      profitsTitle: JSON
      profitsDescription: JSON
      tooltip: String
    ): Service
  }
`;

module.exports = servicesTypeDefs;
