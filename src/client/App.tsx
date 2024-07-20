import { useState } from 'react'

import './App.css'

import Landing from './components/Landing/index'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(0)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
