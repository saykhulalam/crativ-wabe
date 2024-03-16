import { useState } from 'react'
import './App.css'
import Navigation from './nave/Navigation'
import Banner from './banner/Banner'
import Popular from './popular/Popular'
import Success from './success/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Banner/>
      <Popular/>
      <Success/>
    </>
  )
}

export default App
