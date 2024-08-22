import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'
interface EmailProps {
  handleEmail: () => void;
}

export const Email: React.FC<EmailProps> = ({ handleEmail }) => {
  const form = useRef<HTMLFormElement>(null);
  const handleclose = () => {
   
  
  handleEmail()
  }
  
  const sendEmail = (e : FormEvent) => {
    e.preventDefault();
    if (form.current) {
        
        emailjs
          .sendForm('service_yau99ue', 'template_mblo05q', form.current, {
            publicKey: 'w4jULnmAHd8ywSYRg',
          })
          .then(
            () => {
              console.log('SUCCESS!'); 
              handleEmail()
            
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    }
  };

  return (
    <>
   <div className='fondo'>

    <form className='form' ref={form} onSubmit={sendEmail}>
    <div className="mb-3">
<div className='flexbuton'>
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <button  className="btn btn-outline-dark close"  onClick={handleclose}>X</button>
</div>
     
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@email.com' name="user_email"/>
      <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputName" className="form-label">Name</label>
      <input placeholder='name' type="text" name="user_name" className="form-control" id="exampleInputPassword1"/>
    </div>
   
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Get in touch</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='message' name="message"  rows={3}></textarea>
</div>

    <button type="submit" className="btn btn-dark fondobotonsend" value="Send">Send</button>

  </form>
   </div>
    </>
  );
};
