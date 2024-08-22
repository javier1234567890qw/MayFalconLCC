import "./Footer.css";
export const Footer = () => {
  return (
    <div className="foot">
         <footer className="text-center text-md-start foot">
    <div className="container p-4 foot">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
          <h5 className="text-uppercase">Contact Us</h5>

          <p>
          Send a message to give detail on the bookkeeping services you’re interested in discussing with us
          </p>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 className="text-uppercase">Social Media</h6>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-body">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-body">Number</a>
            </li>
           
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 className="text-uppercase mb-0">Programer Social Media</h6>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-body">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-body">Link 2</a>
            </li>
          
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center p-3" >

      © 2024 Copyright : 
      <a className="text-body" href="https://api.whatsapp.com/send?phone=5355041870&text=Hola%2C%20necesito%20un%20hablar_de_su_pagina">  All rights reserved</a>
    </div>
  </footer>
    </div>
  )
}
