import { useState } from 'react'
import './App.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Herobanner from "./components/Herobanner";
function App() {
  const [count, setCount] = useState(0)
  return (           
       <>
    <Header />
       <main>
        <Herobanner />
       </main>
       <Footer />
    </>
  )
}

export default App
