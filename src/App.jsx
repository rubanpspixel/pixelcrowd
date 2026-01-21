import { useState } from 'react'
import './App.scss'
import Header from "./components/Header";
import Herobanner from "./components/Herobanner";
function App() {
  const [count, setCount] = useState(0)
  return (           
       <>
    {/* <Header />
       <main>
        <Herobanner />
       </main> */}
         <h1>Coming Soon</h1>
    </>
  )
}

export default App
