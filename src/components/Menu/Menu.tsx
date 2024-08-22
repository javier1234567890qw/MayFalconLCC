import {  useNavigate } from 'react-router-dom'
import './menu.css'
import { Email } from '../Email/Email';
import { useState } from 'react';
export const Menu = () => {
  const Navigate = useNavigate();

        
  const handleService = async() => {
    setTimeout(() => {
      Navigate('/s'
       
      )   
      ;
        window.scrollTo(0, 0);
    }, 300);
   
  }
  const handlehome = async() => {
    setTimeout(() => {
      Navigate('/');
      window.scrollTo(0, 0);
      
    }, 300);

}
const handleTeam = async() => {
  setTimeout(() => {
    Navigate('/t')
    ; window.scrollTo(0, 0);
    
  }, 300);
  
}

const [email, setEmail] = useState(false)
const handleEmail = () => {
  
   setEmail(!email)
   localStorage.setItem('email', email.toString())
   
}

  return (
    <div>

    <div className="menu"><div className="btn-group" role="group" aria-label="Basic">
    <button type="button" className="btn btn-outline-light menup"><img src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643769-building-home-house-main-menu-start_113416.png" alt="" className='icon'onClick={handlehome}/></button>
    <button type="button" className="btn btn-outline-light menup "><img src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904660-email-envelope-letter-mail-message-post-send_122510.png" alt="" className='icon' onClick={handleEmail}/></button>
    <button type="button" className="btn btn-outline-light menup "><img src="https://cdn.icon-icons.com/icons2/4194/PNG/512/cooperation_greeting_partnership_deal_agreement_handshake_icon_262591.png" alt="" className='icon' onClick={handleService}/></button>
    <button type="button" className="btn btn-outline-light menup "><img src="https://cdn.icon-icons.com/icons2/1805/PNG/512/4230537-business-group-team_115034.png" alt="" className='icon' onClick={handleTeam}/></button>
    
  </div>
  
  </div>
    {email ? <Email   handleEmail= {handleEmail}/> : null} 

    </div>
  )
}
