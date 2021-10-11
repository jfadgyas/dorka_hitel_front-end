// Requests
import React from 'react'
import Filter from './Filter'

const CalcResult = (props) => {
    
    // Create skeleton loading (fake) results
    const skeletonList = () => {
        let fakeResults = []
        for (let i=1; i<4; i++) {
            fakeResults.push(
                <li key={i} className='calc__res-list__item'>
                    <header className='calc__res-list__header'>
                        <div className='calc__res-list__title skeleton skeleton__text'></div>
                        <div className='calc__res-list__title skeleton skeleton__text'></div>                
                        <div className='calc__res-list__title skeleton skeleton__text'></div>                
                    </header>
                    <ul className='calc__res-list'>
                        <li className='calc__res-list__detail-wrapper'>
                            <div className='calc__res-list__details skeleton skeleton__text'></div>
                            <div className='calc__res-list__details skeleton skeleton__text'></div>
                        </li>
                        <li className='calc__res-list__detail-wrapper'>
                            <div className='calc__res-list__details skeleton skeleton__text'></div>
                            <div className='calc__res-list__details skeleton skeleton__text'></div>
                        </li>
                        <li className='calc__res-list__detail-wrapper'>
                            <button className='calc__res-list__btn skeleton'>
                                <div className='skeleton skeleton__text'></div>
                            </button>
                        </li>
                    </ul>
                </li>
            )
        }
        return fakeResults
    }

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
            {!props.resultForFilters.isLoading && props.resultForFilters.data.length ? <Filter resultForFilters={props.resultForFilters} filters={props.filters} handleFilter={props.handleFilter}/> : null}
            <h1 className='calc__res-wrapper__title'>{props.resultForFilters.isLoading ? 'Várakozás az ajánlatokra' : props.loanResult.length ? 'Legkedvezőbb ajánlat' : 'Nincs a keresésnek megfelelő ajánlat'}</h1>
            <ul className='calc__res-list'>
                {!props.resultForFilters.isLoading ? props.loanResult.length ? loanList : null : skeletonList()}
            </ul>
        </section>
    )
}

export default CalcResult