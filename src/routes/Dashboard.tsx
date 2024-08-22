import { Route, Routes } from "react-router-dom"
import { Inicio } from "../components/Inicio/Inicio"

export const Dashboard = () => {
  return (
    <>
    
    
    <Routes>
        <Route path="/" element={<Inicio/>} />

        
    </Routes>
    
    
    </>
  )
}
