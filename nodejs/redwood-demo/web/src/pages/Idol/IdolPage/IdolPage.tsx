import IdolCell from 'src/components/Idol/IdolCell'

type IdolPageProps = {
  id: number
}

const IdolPage = ({ id }: IdolPageProps) => {
  return <IdolCell id={id} />
}

export default IdolPage
