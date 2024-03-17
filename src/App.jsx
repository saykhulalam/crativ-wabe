import { useState } from 'react'
import './App.css'
import Navigation from './nave/Navigation'
import Banner from './banner/Banner'
import Popular from './popular/Popular'
import Success from './success/Success'
import Solution from './solution/Solution'
import Course from './course/Course'
import Saminars from './saminars/Saminars'
import Providing from './providing/Providing'
import World from './world/World'
import Compani from './compani/Compani'
import Bottom from './bottom/Bottom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Banner/>
      <Popular/>
      <Success/>
      <Solution/>
      <Course/>
      <Saminars/>
      <Providing/>
      <World/>
      <Compani/>
      <Bottom/>
    </>
  )
}

export default App
