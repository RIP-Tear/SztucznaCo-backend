const { gql } = require("apollo-server-express");

const blogTypeDefs = gql`
  type Blog {
    id: ID!
    uuid: String!
    createdAt: String
    author: String
    views: Int
    tags: [String]
    title: String
    text: String
    image: String
    public: Boolean
  }

  type Query {
    blogs: [Blog]
  }

  type Mutation {
    addBlog(
      author: String
      views: Int
      tags: [String]
      title: String
      text: String
      image: String
      public: Boolean
    ): Blog

    updateBlog(
      uuid: String!
      author: String
      views: Int
      tags: [String]
      title: String
      text: String
      image: String
      public: Boolean
    ): Blog

    deleteBlog(uuid: String!): Boolean
  }
`;

module.exports = blogTypeDefs;
