// Requests
import React from 'react'

const CalcResult = (props) => {
    // Create list of results
    const loanList = props.loanResult.map(item => 
        <li
            className='calc__res-list__item'
            key={item._id}
            id={item._id}>
            <header className='calc__res-list__header'>
                <h3 className='calc__res-list__title'>{item.bank}</h3>
                <p className='calc__res-list__title'> {item.product}</p>                
            </header>
            <ul className='calc__res-list'>
                <li className='calc__res-list__detail-wrapper'>
                    <h4 className='calc__res-list__details'>Havi törlesztő</h4>
                    {item.ratePeriod ? 
                        item.ratePeriod === 30 ? 
                            <p className='calc__res-list__details'>Végig fix</p> : 
                            <p className='calc__res-list__details'>{item.ratePeriod} évig fix</p> : 
                    null}
                    <p className='calc__res-list__details'>{item.monthlyPay} Ft</p>
                </li>
                <li className='calc__res-list__detail-wrapper'>
                    <h4 className='calc__res-list__details'>Teljes visszafizetés</h4>
                    <p className='calc__res-list__details'>{item.fullPay} Ft</p>
                </li>
                <li className='calc__res-list__detail-wrapper'>
                    <button className='calc__res-list__btn'>Részletek</button>
                </li>
            </ul>
        </li>
    )

    return(
        <section className='calc__res-wrapper'>
            <h1 className='calc__res-wrapper__title'>{props.loanResult.length ? 'Legkedvezőbb ajánlat' : 'Nincs a keresésnek megfelelő ajánlat'}</h1>
            <ul className='calc__res-list'>
                {loanList}
            </ul>
        </section>
    )
}

export default CalcResult