// Requests
import React, {useState} from 'react'
import { Banks } from './Banks'
import CalcResDetails from './CalcResDetails'
import Filter from './Filter'

const CalcResult = props => {
    
    // State for details on the result
    const [details, setDetails] = useState([])

    // Clicking the details button passes the id of the result-item. If item.id=details => show details
    const handleClick = id => {
        setDetails(id)
    }

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
                    <img className='filter__logos' src={`/images/${Banks.find(bank => bank.name === item.bank).logo}`} alt='logo'></img>                
                </li>
                <li className='calc__res-list__detail-wrapper'>
                    <h4 className='calc__res-list__details'>Havi t??rleszt??</h4>
                    {item.ratePeriod ? 
                        item.ratePeriod === 30 ? 
                            <p className='calc__res-list__details'>V??gig fix</p> : 
                            <p className='calc__res-list__details'>{item.ratePeriod} ??vig fix</p> : 
                    null}
                    <p className='calc__res-list__details'>{item.monthlyPay.toLocaleString('hu-HU')} Ft</p>
                </li>
                <li className='calc__res-list__detail-wrapper'>
                    <h4 className='calc__res-list__details'>Teljes visszafizet??s</h4>
                    <p className='calc__res-list__details'>{item.fullPay.toLocaleString('hu-HU')} Ft</p>
                </li>                
                <li className='calc__res-list__detail-wrapper'>
                    <button
                        className='calc__res-list__btn'
                        onClick={() => handleClick(item._id)}>R??szletek</button>
                </li>
            </ul>
            {details === item._id && <CalcResDetails detailItem={item} bank={item.bank} loanRequest={props.loanRequest}/>}
        </li>
    )

    return(
        <section className='calc__res-wrapper'>
            {!props.resultForFilters.isLoading && props.resultForFilters.data.length ? <Filter resultForFilters={props.resultForFilters} filters={props.filters} handleFilter={props.handleFilter}/> : null}
            <h1 className='calc__res-wrapper__header'>{props.resultForFilters.isLoading ? 'V??rakoz??s az aj??nlatokra' : props.loanResult.length ? 'Legkedvez??bb aj??nlat' : 'Nincs a keres??snek megfelel?? aj??nlat'}</h1>
            <ul className='calc__res-list'>
                {!props.resultForFilters.isLoading ? props.loanResult.length ? loanList : null : skeletonList()}
            </ul>
        </section>
    )
}

export default CalcResult