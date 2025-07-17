const { gql } = require("apollo-server-express");

const serviceContentTypeDefs = gql`
  type ContentItem {
    uuid: String!
    uuidService: String
    contentTitle: String
    contentIcon: String
    contentIndex: Int
  }

  type Query {
    serviceContent: [ContentItem]
  }

  type Mutation {
    addContentItem(
      uuidService: String!
      contentTitle: String
      contentIcon: String
      contentIndex: Int
    ): ContentItem

    updateContentItem(
      uuid: String!
      contentTitle: String
      contentIcon: String
      contentIndex: Int
    ): ContentItem

    deleteContentItem(uuid: String!): Boolean
  }
`;

module.exports = serviceContentTypeDefs;
