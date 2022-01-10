import React from 'react'

const ContactForm = props => {

    // Create input fields
    const inputList = props.inputs.map((item, index) => 
        <div key={index} className='contact__form-group'>
            <div id={`${item.id}Group`} className='contact__input-wrapper'>
                <span className={item.icon}></span>
                <input
                    id={item.id}
                    type={item.type}
                    name={item.name}
                    className={item.className}
                    required={item.required}
                    placeholder={item.placeholder}
                    pattern={item.pattern.toString().replaceAll('/', '')}
                    // autoComplete={item.autoComplete}
                    value={props.messageDetails[item.name]}
                    ref={ref => props.inputRef.current[index] = ref}
                    onChange={props.handleKey}
                    onKeyUp={e => props.handleKey(e, index)}
                    onBlur={props.validate}
                />
                <span className={item.icon}></span>
                <label htmlFor={item.id} className='contact__label'>{item.labelText}</label>
            </div>
            <small
                id={`${item.name}Error`}
                className='contact__error'>
            </small>
        </div>
    )

    return (
        <form
            className='contact__form'
            id='contactForm'
            noValidate>
            {inputList}            
            <div className='contact__form-group'>
                <div id='messageGroup' className='contact__input-wrapper'>
                    <span className='contact__icon contact__icon--message'></span>
                    <textarea
                        id='message'
                        name='message'
                        className='contact__input contact__input--area'
                        required={true}
                        placeholder=''
                        value={props.messageDetails.message}
                        ref={ref => props.inputRef.current[props.inputRef.current.length] = ref}
                        onChange={props.handleKey}
                        onBlur={props.validate}
                    >                            
                    </textarea>
                    <span className='contact__icon contact__icon--message'></span>
                    <label htmlFor='message' className='contact__label'>Üzenet</label>
                </div>
                <small
                    id='messageError'
                    className='contact__error'>
                </small>
            </div>
            <div className='contact__form-group'>
                <button
                    type='button'
                    className='contact__btn'
                    onClick={props.handleSubmit}>Küldés
                </button>
            </div>
        </form>
    )
}

export default ContactForm