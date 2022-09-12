import React from 'react'
import { Header, Link } from './Components/Header'

const links: Link[] = [
  { id: 1, name: 'TEXT', link: '#' },
  { id: 2, name: 'TEXT_TEXT', link: '#' },
  { id: 3, name: 'TEXT_TEXT_TEXT', link: '#' },
]

function App() {
  return (
    <div className="App">
      <Header links={links} activeItem={1} />
    </div>
  )
}

export default App
