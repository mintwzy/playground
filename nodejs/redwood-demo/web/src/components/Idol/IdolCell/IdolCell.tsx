import type { FindIdolById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Idol from 'src/components/Idol/Idol'

export const QUERY = gql`
  query FindIdolById($id: Int!) {
    idol: idol(id: $id) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Idol not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ idol }: CellSuccessProps<FindIdolById>) => {
  return <Idol idol={idol} />
}
