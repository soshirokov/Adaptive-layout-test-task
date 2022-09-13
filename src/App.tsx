import React from 'react'
import { Footer } from './Components/Footer'
import { Header, Link } from './Components/Header'
import { Home } from './Routes/Home'

const links: Link[] = [
  { id: 1, name: 'TEXT', link: '#' },
  { id: 2, name: 'TEXT_TEXT', link: '#' },
  { id: 3, name: 'TEXT_TEXT_TEXT', link: '#' },
]

function App() {
  return (
    <div>
      <Header links={links} activeItem={1} />
      <Home />
      <Footer />
    </div>
  )
}

export default App
