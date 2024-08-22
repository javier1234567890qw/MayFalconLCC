import pic from "../../../images/meetTeam.webp"
import './PequeServ.css'



export const PequeServ = () => {
  return (
    <div className="contM">
            <h2 className="tit">Our Services</h2>
        <div className="Divgrande">
            <ul className="parrafos">
                <li>ACCOUNTS payable </li>
                <li>Accounts Receivable</li>
                <li>CREATING INVOICES</li>
                <li>COLLECTIONS</li>
                <li>RECORD CUSTOMER PAYMENTS</li> 
                 </ul>
            <div className="fotocontain">
                <img src={pic} alt="Foto" />
                <button className="butonsob btn btn-dark">More</button>
            </div>
        </div>
    </div>
  )
}
