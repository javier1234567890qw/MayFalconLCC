import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./routes/Dashboard"
import { ServicioPant } from "./components/Inicio/ServicioPant"
import { TeamPant } from "./components/Inicio/TeamPant"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/s" element={<ServicioPant/>} />
<Route path="/t" element={<TeamPant/>} />


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
