export const schema = gql`
  type Idol {
    id: Int!
    name: String!
    photos: [Photo]!
    createdAt: DateTime!
  }

  type Query {
    idols: [Idol!]! @requireAuth
    idol(id: Int!): Idol @requireAuth
  }

  input CreateIdolInput {
    name: String!
  }

  input UpdateIdolInput {
    name: String
  }

  type Mutation {
    createIdol(input: CreateIdolInput!): Idol! @requireAuth
    updateIdol(id: Int!, input: UpdateIdolInput!): Idol! @requireAuth
    deleteIdol(id: Int!): Idol! @requireAuth
  }
`
