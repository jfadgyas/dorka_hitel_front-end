// Requirements
import React, {useEffect} from "react"
import {Banks} from './Banks'
import {Rates} from './Rates'

const Filter = props => {
    
    // Calculate total filter height for animation
    useEffect(() => {
        function resize(){
            document.documentElement.style.setProperty('--filterHeight', `0px`)
            const filterGroups = Array.from(document.querySelectorAll('.filter__groups'))
            const filterHeight = window.innerWidth >= 1200 ? filterGroups.reduce((max, item) => Math.max(max, item.scrollHeight), 0) : filterGroups.reduce((total, item) => total = total + item.scrollHeight, 0)
            document.documentElement.style.setProperty('--filterHeight', `${filterHeight}px`)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    })

    // Create the filters
    const createFilters = filter => {
        let filterArray
        switch (filter){
            case 'bank':
                filterArray = Banks
                break
            case 'ratePeriod':
                filterArray = Rates
                break
            default: return
        }
        const filterList = filterArray.map((item, index) => props.resultForFilters.data.some(elem => elem[filter] === item.name) && 
            <li key={index} className='filter__item'>
                <input
                    className='filter__input'
                    id={item.name}
                    name={filter}
                    type='checkbox'
                    onChange={props.handleFilter}
                ></input>
                <label className='filter__label' htmlFor={item.name}>
                    {filter === 'bank' && <>{item.name}<img className='filter__logos' src={`/images/${item.logo}`} alt='logo'></img></>}
                    {filter === 'ratePeriod' ? item.name === 30 ? 'Végig fix' : `${item.name} évig fix` : null}
                </label>             
            </li>
        )
        return filterList
    }    

    return (   
        <section className='filter'>
            <label  htmlFor='showFilters'>
                <h1 className='filter__header'>
                    <span className='filter__icons filter__icons--filter'></span>
                    Szűrők {props.filters.showFilters ? ' elrejtése' : ' megjelenítése'}
                </h1>
            </label>
            <input
                className='filter__input--hidden'
                id='showFilters'
                name='showFilters'
                type='checkbox'                
                onClick={props.handleFilter}>
            </input>
            <div className={props.filters.showFilters ? 'filter__wrapper' : 'filter__wrapper filter__wrapper--hidden'}>                
                <div className='filter__groups'>
                    <h3 className='filter__title'>A kijelölt bankokat mutassa:</h3>
                    <ul className='filter__list'>
                        {createFilters('bank')}
                    </ul>
                </div>
                {props.resultForFilters.data[0].ratePeriod &&
                    <div className='filter__groups'>
                        <h3 className='filter__title'>Kamatozás:</h3>
                        <ul className='filter__list'>
                            {createFilters('ratePeriod')}
                        </ul>
                    </div>
                }            
                <div className='filter__groups'>
                    <h3 className='filter__title'>Maximum havi törlesztő: {props.filters.maxMonthlyPay.toLocaleString('hu-HU')} Ft</h3>
                    <div className='filter__minmax-wrapper'>
                        <small className='filter__minmax'>{props.resultForFilters.data[0].monthlyPay.toLocaleString('hu-HU')}</small>
                        <input
                            className='filter__input filter__input--payment'
                            name='maxMonthlyPay'
                            type='range'
                            min={props.resultForFilters.data[0].monthlyPay}
                            max={props.resultForFilters.data[props.resultForFilters.data.length-1].monthlyPay}
                            // step='100'
                            value={props.filters.maxMonthlyPay || props.resultForFilters.data[props.resultForFilters.data.length-1].monthlyPay}
                            onChange={props.handleFilter}
                            >
                        </input>
                        <small className='filter__minmax'>{props.resultForFilters.data[props.resultForFilters.data.length-1].monthlyPay.toLocaleString('hu-HU')}</small>
                    </div>
                </div>
            </div>                         
        </section>    
    )
}

export default Filter