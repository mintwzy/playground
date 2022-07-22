export const schema = gql`
  type Photo {
    id: Int!
    path: String!
    idolId: Int!
    idol: Idol!
    createdAt: DateTime!
  }

  type Query {
    photos: [Photo!]! @requireAuth
    photo(id: Int!): Photo @requireAuth
  }

  input CreatePhotoInput {
    path: String!
    idolId: Int!
  }

  input UpdatePhotoInput {
    path: String
    idolId: Int
  }

  type Mutation {
    createPhoto(input: CreatePhotoInput!): Photo! @requireAuth
    updatePhoto(id: Int!, input: UpdatePhotoInput!): Photo! @requireAuth
    deletePhoto(id: Int!): Photo! @requireAuth
  }
`
