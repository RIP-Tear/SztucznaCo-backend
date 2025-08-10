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
    metaDescription: String 
  }

  type Query {
    blogs: [Blog]
  }

  type Mutation {
    addBlog(
      author: String
      tags: [String]
      title: String
      text: String
      image: String
      public: Boolean
      metaDescription: String 
    ): Blog

    updateBlog(
      uuid: String!
      author: String
      tags: [String]
      title: String
      text: String
      image: String
      public: Boolean
      metaDescription: String 
    ): Blog

    deleteBlog(uuid: String!): Boolean
    incrementBlogViews(uuid: String!): Blog
  }
`;

module.exports = blogTypeDefs;
