import { useState } from 'react'
import './App.scss'
import Header from "./components/Header";
import HeroBanner from "./components/herobanner";


function App() {
  const [count, setCount] = useState(0)

  return (           
       <>
    <Header />
       <main>
        <HeroBanner />
       </main>
    </>
  )
}

export default App
