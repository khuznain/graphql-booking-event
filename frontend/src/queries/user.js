import { gql } from "apollo-boost";

export const loginUser = gql`
  mutation($email: String!, $password: String!) {
    loginUser(userInput: { email: $email, password: $password }) {
      userId
      token
    }
  }
`;

export const createUser = gql`
  mutation($email: String!, $password: String!) {
    createUser(userInput: { email: $email, password: $password }) {
      _id
      email
    }
  }
`;
