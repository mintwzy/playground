import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <h1>AdminPage</h1>
      <ul>
        <li>
          <Link to={routes.idols()}>Idols</Link>
        </li>
        <li>
          <Link to={routes.photos()}>Photos</Link>
        </li>
      </ul>
    </>
  )
}

export default AdminPage
