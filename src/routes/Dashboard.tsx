import { Route, Routes } from "react-router-dom"
import { Inicio } from "../components/Inicio/Inicio"
import { ServicioPant } from "../components/Inicio/ServicioPant"

export const Dashboard = () => {
  return (
    <>
    
    
    <Routes>
        <Route path="/" element={<Inicio/>} />

        
    </Routes>
    
    
    </>
  )
}
