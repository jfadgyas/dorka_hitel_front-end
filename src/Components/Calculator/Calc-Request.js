// Requests
import React from 'react'
import '../../style/calculator.css'

const CalcRequest = (props) => {

    return (
        <div className='calc__req-wrapper'>
            <h1 className='calc__req__header'>{props.loanConditions && props.loanConditions.hunName} Kalkulátor 2021</h1>
            <form
                className='calc__req__form'
                id='requestForm'
                noValidate>
                <div className='calc__req__form__groups'>
                    <label
                        className='calc__req__form__labels'
                        htmlFor='loanType'>Hiteltípus
                    </label>
                    <div
                        id='loanTypeGroup'
                        className='calc__req__form__input-wrapper'>
                        <span className='calc__req__form__icons calc__req__form__icons--credit'></span>
                        <select
                            className='calc__req__form__inputs calc__req__form__inputs--select'
                            id='loanType'
                            name='loanType'
                            required={true}
                            value={props.loanRequest.loanType}
                            onChange={props.handleChange}
                            onBlur={props.handleSubmit}>
                            <option value=''>Választott hitel:</option>
                            <option value='personal'>Személyi kölcsön</option>
                            <option value='home'>Lakáshitel</option>
                            <option value='baby'>Babaváró</option>
                            <option value='csok'>CSOK</option>
                            {/*<option value='auto'>Autóhitel</option>*/}
                        </select>                 
                    </div>
                    <small
                        id='loanTypeError'
                        className='calc__req__form__error'>
                    </small>
                </div>
                {props.loanRequest.loanType !== 'baby' && 
                    <div className='calc__req__form__groups'>
                        <label
                            className='calc__req__form__labels'
                            htmlFor='salary'>Havi nettó jövedelem
                        </label>
                        <div
                            id='salaryGroup'
                            className='calc__req__form__input-wrapper'>
                            <span className='calc__req__form__icons calc__req__form__icons--cash'></span>
                            <input 
                                className='calc__req__form__inputs'
                                id='salary'
                                name='salary'
                                type='number'
                                placeholder='fizetes'
                                min='0'
                                max='999999999'
                                required={true}
                                value={props.loanRequest.salary}
                                onChange={props.handleChange}
                                onBlur={props.handleSubmit}
                            />
                            <span className='calc__req__form__icons calc__req__form__icons--text'>Ft</span>
                        </div>
                        <small
                            id='salaryError'
                            className='calc__req__form__error'>                        
                        </small>
                    </div>
                }
                <div className='calc__req__form__groups'>
                    <label
                        className='calc__req__form__labels'
                        htmlFor='loan'>Hitelösszeg
                    </label>
                    <div
                        id='loanGroup'
                        className='calc__req__form__input-wrapper'>
                        <span className='calc__req__form__icons calc__req__form__icons--credit'></span>
                        <input 
                            className='calc__req__form__inputs'
                            id='loan'
                            name='loan'
                            type='number'
                            placeholder='hitel'
                            min={props.loanConditions ? props.loanConditions.minLoan : '0'}
                            max={props.loanConditions ? props.loanConditions.maxLoan : '999999999'}
                            required={true}
                            value={props.loanRequest.loan}
                            onChange={props.handleChange}
                            onBlur={props.handleSubmit}
                        />
                        <span className='calc__req__form__icons calc__req__form__icons--text'>Ft</span>
                    </div>
                    <small
                        id='loanError'
                        className='calc__req__form__error'>
                    </small>
                </div>
                <div className='calc__req__form__groups'>
                    <label
                        className='calc__req__form__labels'
                        htmlFor='year'>Futamidő
                    </label>
                    <div
                        id='yearGroup'
                        className='calc__req__form__input-wrapper'>
                        <span className='calc__req__form__icons calc__req__form__icons--calendar'></span>
                        <input 
                            className='calc__req__form__inputs'
                            id='year'
                            name='year'
                            type='number'
                            placeholder='futamido'
                            min={props.loanConditions ? props.loanConditions.minYear : '0'}
                            max={props.loanConditions ? props.loanConditions.maxYear : '99'}
                            required={true}
                            value={props.loanRequest.year}
                            onChange={props.handleChange}
                            onBlur={props.handleSubmit}
                        />
                        <span className='calc__req__form__icons calc__req__form__icons--text'>év</span>
                    </div>
                    <small
                        id='yearError'
                        className='calc__req__form__error'>
                    </small>
                </div>
                <button
                    className='calc__req__form__btn'
                    onClick={props.handleSubmit}>Ajánlatok
                </button>
            </form>
        </div>
    )
}

export default CalcRequest