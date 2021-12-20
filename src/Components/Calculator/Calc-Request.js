// Requests
import React from 'react'
import '../../style/calculator.css'

const CalcRequest = props => {

    // Create input fields
    // Should check if fizetes && loantype = baby => disabled true
    const inputList = props.inputs.map((item, index) => 
        <div key={index} className='calc__req__form__groups'>
            <label
                className='calc__req__form__labels'
                htmlFor={item.id}>{item.labelText.label}
            </label>
            <div
                id={`${item.id}Group`}
                className='calc__req__form__input-wrapper'>
                <span className={item.icon}></span>
                <input
                    className={item.className}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    min={item.min}
                    max={item.max}
                    required={item.required}
                    value={props.loanRequest[item.name]}
                    ref={ref => props.inputRef.current[index] = ref}
                    onChange={props.handleKey}
                    onKeyUp={e => props.handleKey(e, index)}
                    onBlur={props.validate}
                />
                <span className='calc__req__form__icons calc__req__form__icons--text'>{item.labelText.quantity}</span>
            </div>
            <small
                id={`${item.id}Error`}
                className='calc__req__form__error'>
            </small>
        </div>
    )

    return (
        <div className='calc__req-wrapper'>
            <h1 className='calc__req__header'>{props.loanConditions && props.loanConditions.hunName} Kalkulátor 2022</h1>
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
                            onChange={props.handleKey}
                            onBlur={props.validate}>
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
                {inputList}
                <button
                    className='calc__req__form__btn'
                    type='button'
                    onClick={props.handleSubmit}>Ajánlatok
                </button>
            </form>
        </div>
    )
}

export default CalcRequest