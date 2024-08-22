import './Team.css'
import  pic  from '../../images/stylish-businessman-working-office.webp'
export const Team = () => {
  return (
    <div className='total'>
        <div className='imagen'>

        <h2 className='teamtitle'>Pros of outsourcing your bookkeeping</h2>
        <div className='teamgrande'
        >
            <div className='team-item'>
                <h3>Cost-effective</h3>
                <p>– Eliminate the need to hire and train in-house accounting bookkeepers. Save on salaries, benefits, training expenses, as well as occupancy expenses like office space and equipment.</p>
            </div>
            <div className='team-item'>
                <h3>Flexibility</h3>
                <p> – Ability to focus on your business needs while increasing productivity and efficiency.</p>
            </div>
            <div className='team-item'>
                <h3>
                Reliability
                </h3>
                <p>
                – Eliminate staffing concerns with turn-over, the cost that comes along with it, and how it affects other staff.
                </p>
            </div>
        </div>
            </div>
            <div>
        <h2 className='teamtitle'>Our Team</h2>

             <div className='teamgrande'>
                <p className='
                parrafo'>Over 15 years experience to trust in having your financial transactions categorized and organized! Ongoing daily, weekly, or monthly bookkeeping, as well as catch up/clean up, or project based work.

                We’ll keep your books up to date, confirm categorization along the way so you don’t miss out on important tax write-offs.
                
                Industries served: Automotive, Restaurant & Hospitality; Alcoholic Beverage Commercial Industry, Outsourced Accounting, Real Estate, Education, Marketing, Consulting, Media, Non-Profit, Healthshare.
                
                Reach out today to discuss your bookkeeping and back office needs.</p>
                <div className='fotocontainer'>

                    <img src={pic} alt="team" />
                    <button className='btn btn-dark butonsobre'>Contact</button>
                </div>
             </div>

            </div>

         
    </div>
  )
}
