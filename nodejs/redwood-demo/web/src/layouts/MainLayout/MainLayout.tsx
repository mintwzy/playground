import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.viewer()}>Viewer</Link>
          </li>
          <li>
            <Link to={routes.admin()}>Admin</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
