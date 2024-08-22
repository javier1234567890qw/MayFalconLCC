import './pantalla1.css'
import  logo  from '../../images/1223.png'
export const Pantalla1 = () => {
  return (
    <div className='vh'>
        <div className='izquierda impS'></div>
        <div className='derecha animation'>
        
        <img src={logo} alt="Transactions" />
        </div>
        <div className='derecha3 infiniteanimation2'>Our company offers help to small and medium-sized businesses in their search for financial success.</div>
        <div className='derecha2 infiniteanimation2'>We’ll keep your books up to date and confirm categorization along the way so you can take advantage of important tax write-offs.</div>
        <div className='derecha1 infiniteanimation2'>Need your books cleaned up or just caught up? Need financial transactions categorized accurately? New categories created?</div>
        
        <div className='centrado animation'>
        <h1 className='titulo animation'>Falcon & May</h1>
        <h2 className='colortitulo animation'>Services</h2>
        </div>


    </div>
  )
}
