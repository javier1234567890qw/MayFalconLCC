import { PequeServ } from "../componentVarios/PequeServ/PequeServ"
import { Footer } from "../Footer/Footer"
import { Menu } from "../Menu/Menu"
import { Pantalla1 } from "../Pantalla1/Pantalla1"
export const Inicio = () => {
  return (
      <div className="" >
      <Menu/>
    <div className="">
        <Pantalla1/>


    </div>

        <PequeServ/>
    <Footer/>
        </div>
    
  )
}
