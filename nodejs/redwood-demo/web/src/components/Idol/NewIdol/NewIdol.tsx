import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdolForm from 'src/components/Idol/IdolForm'

const CREATE_IDOL_MUTATION = gql`
  mutation CreateIdolMutation($input: CreateIdolInput!) {
    createIdol(input: $input) {
      id
    }
  }
`

const NewIdol = () => {
  const [createIdol, { loading, error }] = useMutation(CREATE_IDOL_MUTATION, {
    onCompleted: () => {
      toast.success('Idol created')
      navigate(routes.idols())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createIdol({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Idol</h2>
      </header>
      <div className="rw-segment-main">
        <IdolForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIdol
