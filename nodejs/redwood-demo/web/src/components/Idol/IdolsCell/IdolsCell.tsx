import type { FindIdols } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Idols from 'src/components/Idol/Idols'

export const QUERY = gql`
  query FindIdols {
    idols {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No idols yet. '}
      <Link
        to={routes.newIdol()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ idols }: CellSuccessProps<FindIdols>) => {
  return <Idols idols={idols} />
}
