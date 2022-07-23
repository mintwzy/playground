import EditIdolCell from 'src/components/Idol/EditIdolCell'

type IdolPageProps = {
  id: number
}

const EditIdolPage = ({ id }: IdolPageProps) => {
  return <EditIdolCell id={id} />
}

export default EditIdolPage
