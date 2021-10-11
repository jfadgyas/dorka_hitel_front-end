// Requirements
import React, {useState, useEffect} from 'react'
import CSOKTable from './CSOK-table'

const CSOK = () => {

    const [csok, setCsok] = useState({
        csokType: 'normal',
        childrenNow: 0,
        childrenFuture: 0,
        childrenTotal: function(){
            const total = parseInt(this.childrenNow) + parseInt(this.childrenFuture)
            return total >=4 ? 4 : total
        },
        purpose: ''
    })

    // Set states on selection
    const handleChange = e => {
        const {id, name, value} = e.target
        id ? setCsok({...csok, purpose: id}) : setCsok({...csok, [name]: value})
    }

    useEffect(() => {
        if (csok.purpose && csok.childrenTotal()){
            const csokResult = document.querySelector('#csokResult')
            const house = document.querySelector(`#children${csok.childrenTotal()}${csok.purpose}-h`) || ''
            const support = document.querySelector(`#children${csok.childrenTotal()}${csok.purpose}-s`) || ''
            const loan = document.querySelector(`#children${csok.childrenTotal()}${csok.purpose}-l`) || ''
            const buy = document.querySelector(`#children${csok.childrenTotal()}${csok.purpose}-b`) || ''
            const renew = document.querySelector(`#children${csok.childrenTotal()}${csok.purpose}-r`) || ''
            const text = csok.csokType === 'normal' ? 
                `Maximálisan igénybe vehető <strong>${support.innerText} Ft</strong> támogatás, <strong>${loan.innerText} Ft</strong> hitel, minimum <strong>${house.innerText} m2</strong> (lakás / ház) alapterületű ingatlanra.`
                :
                `Maximálisan igénybe vehető <strong>${support.innerText || buy.innerText} Ft</strong> támogatás${buy && ' vásárlásra'}, ${renew && `<strong>${renew.innerText} Ft</strong> bővítésre,`}  minimum <strong>${house.innerText} m2</strong> (lakás / ház) alapterületű ingatlanra.`
            csokResult.innerHTML = text
        }
    })

    return (
        <div className='calc__req-wrapper'>
            <h1 className='calc__req__header'>CSOK Kalkulátor 2021</h1>
            <div className='calc__req__form'>
                <div className='calc__req__form__groups'>
                    <label className='calc__req__form__labels'>Melyik típusú CSOKot venné igénybe?</label>
                    <label className='csok__label'>
                        <input
                            className='csok__input'
                            name='csokType'
                            type='radio'
                            value='normal'
                            checked={csok.csokType === 'normal'}
                            onChange={handleChange}/>
                        Normál
                        <span className='csok__icon csok__icon--question'>icon</span>
                        <small className='csok__tooltip'>Új ingatlan vásárlás, építés, vagy használt ingatlan vásárlás, bővítés</small>
                    </label>
                    <label className='csok__label'>
                        <input
                            className='csok__input'
                            name='csokType'
                            type='radio'
                            value='falusi'
                            checked={csok.csokType === 'falusi'}
                            onChange={handleChange}/>
                        Falusi
                        <span className='csok__icon csok__icon--question'></span>
                        <small className='csok__tooltip'>Csak bővítés vagy korszerűsítés, vagy használt ingatlan vásárlás</small>
                    </label>
                </div>
                <div className='calc__req__form__groups'>
                    <label className='calc__req__form__labels'>Hány 25 év alatti gyermeke van jelenleg?</label>
                    <div className='calc__req__form__input-wrapper'>
                        <span className='calc__req__form__icons calc__req__form__icons--child'></span>
                        <select 
                            className='calc__req__form__inputs calc__req__form__inputs--select'
                            name='childrenNow'
                            onChange={handleChange}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4 vagy több</option>
                        </select>
                    </div>
                </div>
                <div className='calc__req__form__groups'>
                    <label className='calc__req__form__labels'>Hány gyermeke születik a jövőben?</label>
                    <div className='calc__req__form__input-wrapper'>
                        <span className='calc__req__form__icons calc__req__form__icons--addchild'></span>
                        <select
                            className='calc__req__form__inputs calc__req__form__inputs--select'
                            name='childrenFuture'
                            onChange={handleChange}>
                                <option value='0'>0</option>
                                <option value='1'>Még 1 (4 éven belül)</option>
                                <option value='2'>Még 2 (8 éven belül)</option>
                                <option value='3'>Még 3 (10 éven belül)</option>
                                <option value='4'>Még 4 vagy több (10 éven belül)</option>
                        </select>
                    </div>
                </div>
                <div className='calc__req__form__groups'>
                    <small className='calc__req__form__labels'>Kattintson a táblázat legfelső sorában az igénybevételnek megfelelő oszlopra! (új, használt, felújítás, stb.)</small>
                </div>
            </div>
            <CSOKTable csok={csok} handleChange={handleChange}/>
            <p id='csokResult' className='csok__result'></p>
        </div>
    )
}

export default CSOK