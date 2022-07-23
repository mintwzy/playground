import type { EditIdolById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdolForm from 'src/components/Idol/IdolForm'

export const QUERY = gql`
  query EditIdolById($id: Int!) {
    idol: idol(id: $id) {
      id
      name
      createdAt
    }
  }
`
const UPDATE_IDOL_MUTATION = gql`
  mutation UpdateIdolMutation($id: Int!, $input: UpdateIdolInput!) {
    updateIdol(id: $id, input: $input) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ idol }: CellSuccessProps<EditIdolById>) => {
  const [updateIdol, { loading, error }] = useMutation(UPDATE_IDOL_MUTATION, {
    onCompleted: () => {
      toast.success('Idol updated')
      navigate(routes.idols())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateIdol({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Idol {idol.id}</h2>
      </header>
      <div className="rw-segment-main">
        <IdolForm idol={idol} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
