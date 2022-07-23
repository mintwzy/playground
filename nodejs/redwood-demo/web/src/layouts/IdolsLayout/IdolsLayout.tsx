import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import './IdolsLayout.css'

type IdolLayoutProps = {
  children: React.ReactNode
}

const IdolsLayout = ({ children }: IdolLayoutProps) => {
  const generateIdols = () => {
    console.log('generating idols')
  }

  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.idols()} className="rw-link">
            Idols
          </Link>
        </h1>
        <div className={'container'}>
          <Link to={routes.newIdol()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> New Idol
          </Link>
          <button className="rw-button rw-button-green" onClick={generateIdols}>
            <div className="rw-button-icon">+</div>
            Generate Idols
          </button>
        </div>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default IdolsLayout
