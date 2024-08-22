import { Menu } from '../Menu/Menu'
import { Footer } from '../Footer/Footer'
import { ServiciosTodos } from '../Servicios/ServiciosTodos'
import { PequeServ } from '../componentVarios/PequeServ/PequeServ'
import { SeccionIni } from '../seccion/SeccionIni'

export const ServicioPant = () => {
  return (
    <>
    <div className=''>
<Menu/>
<SeccionIni nombre ='Services'/>
<div className=''>
  <PequeServ/>
  <ServiciosTodos/>
<Footer/>

</div>
    </div>


    
    </>
  )
}
