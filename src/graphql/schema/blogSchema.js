const { gql } = require("apollo-server-express");

const blogTypeDefs = gql`
  scalar JSON

  type Blog {
    id: ID!
    uuid: String!
    createdAt: String
    author: String
    views: Int
    tags: JSON
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
      tags: JSON
      title: String
      text: String
      image: String
      public: Boolean
    ): Blog

    updateBlog(
      uuid: String!
      author: String
      views: Int
      tags: JSON
      title: String
      text: String
      image: String
      public: Boolean
    ): Blog
  }
`;

module.exports = blogTypeDefs;
