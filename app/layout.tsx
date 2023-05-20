import './styles/globals.css'
import './styles/app.scss'
import "highlight.js/styles/github-dark.css";

import Link from 'next/link'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Prime Blogs',
  description: 'Welcome, to the prime blogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <nav>
          <div className="nav-items">
            <div>
              <h3>PrimeBlogs</h3>
            </div>
            <div>
              <Link className='nav-links' href="/" > Home </Link>
              <Link className='nav-links' href="/products" > Blogs </Link>
              <Link className='nav-links' href="/cart" > Tutorials </Link>
              <Link className='nav-links' href="/mypage" > Examples </Link>
            </div>

          </div>
        </nav>
        <main className='page-content'>
          <div className='left-bar'>
            <Sidebar />
          </div>
          <div className='main-bar'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
