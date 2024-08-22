import React from 'react'
import './SeccionIni.css'


interface SeccionIniProps {
    nombre: string;
  }
  

export const SeccionIni: React.FC<SeccionIniProps> = ({nombre} ) => {
  return (
    <>
      
      <div className='flexibleIni'>
           
           <h2 className='titIni'>  {nombre}</h2>
           <div className='oscuro'></div>
           <div className='imgcont'>
           <img className='img23' src="https://img.freepik.com/free-photo/flat-lay-desk-arrangement-with-cash_23-2149103930.jpg?t=st=1722691581~exp=1722695181~hmac=d5ed8c6f9ef05b6ea8d8e35d2716bc1ab21313c3cb682baab8d2307b035f071e&w=740" alt="Foto34" />

           </div>
         

      </div>
    
    
    
    </>
  )
}
