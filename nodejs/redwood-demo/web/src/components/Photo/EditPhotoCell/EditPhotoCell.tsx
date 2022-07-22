import type { EditPhotoById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PhotoForm from 'src/components/Photo/PhotoForm'

export const QUERY = gql`
  query EditPhotoById($id: Int!) {
    photo: photo(id: $id) {
      id
      path
      idolId
      createdAt
    }
  }
`
const UPDATE_PHOTO_MUTATION = gql`
  mutation UpdatePhotoMutation($id: Int!, $input: UpdatePhotoInput!) {
    updatePhoto(id: $id, input: $input) {
      id
      path
      idolId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ photo }: CellSuccessProps<EditPhotoById>) => {
  const [updatePhoto, { loading, error }] = useMutation(UPDATE_PHOTO_MUTATION, {
    onCompleted: () => {
      toast.success('Photo updated')
      navigate(routes.photos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { idolId: parseInt(input.idolId), })
    updatePhoto({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Photo {photo.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PhotoForm photo={photo} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
