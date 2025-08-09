// subpagesTypeDefs.js
const { gql } = require("apollo-server-express");

const subpagesTypeDefs = gql`
  type Subpage {
    id: ID!
    uuid: String!
    createdAt: String
    title: String
    text: String
    image: String
    metaDescription: String
    video: String
    public: Boolean
    buttonName: String
    buttonLink: String
  }

  type Query {
    subpages: [Subpage]
  }

  type Mutation {
    addSubpage(
      title: String!
      text: String
      image: String
      metaDescription: String
      video: String
      public: Boolean
      buttonName: String
      buttonLink: String
    ): Subpage

    updateSubpage(
      uuid: String!
      title: String
      text: String
      image: String
      metaDescription: String
      video: String
      public: Boolean
      buttonName: String
      buttonLink: String
    ): Subpage

    deleteSubpage(uuid: String!): Boolean
  }
`;

module.exports = subpagesTypeDefs;
