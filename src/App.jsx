import { Routes, Route } from "react-router-dom"

//Views
import Home from "./views/Home"
import Nosotros from "./views/Nosotros"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
    </Routes>
  )
}
export default App
