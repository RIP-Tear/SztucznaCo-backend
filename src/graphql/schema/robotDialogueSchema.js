const { gql } = require("apollo-server-express");

const robotDialogueTypeDefs = gql`
  type RobotDialogue {
    id: ID!
    step_index: Int!
    speaker: String!
    text: String!
  }

  type Query {
    robotDialogues: [RobotDialogue]
  }

  type Mutation {
    addRobotDialogue(
      step_index: Int!
      speaker: String!
      text: String!
    ): RobotDialogue

    updateRobotDialogue(
      id: ID!
      step_index: Int
      speaker: String
      text: String
    ): RobotDialogue

    deleteRobotDialogue(id: ID!): Boolean
  }
`;

module.exports = robotDialogueTypeDefs;
