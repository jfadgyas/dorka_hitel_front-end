import React from 'react'

const ContactForm = props => {

    return (
        <form
            className='contact__form'
            id='contactForm'
            noValidate>
            <div className='contact__form-group'>
                <div id='firstNameGroup' className='contact__input-wrapper'>
                    <span className='contact__icon contact__icon--name'></span>
                    <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        className='contact__input'
                        required={true}
                        placeholder=''
                        value={props.messageDetails.firstName}
                        onChange={props.handleChange}
                        onBlur={props.handleSubmit}
                    />
                    <span className='contact__icon contact__icon--name'></span>
                    <label htmlFor='firstName' className='contact__label'>Név</label>
                </div>
                <small
                    id='firstNameError'
                    className='contact__error'>
                </small>
            </div>                
            <div className='contact__form-group'>
                <div id='phoneGroup' className='contact__input-wrapper'>
                    <span className='contact__icon contact__icon--phone'></span>
                    <input
                        id='phone'
                        type='text'
                        name='phone'
                        className='contact__input'
                        required={true}
                        placeholder=''
                        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                        value={props.messageDetails.phone}
                        onChange={props.handleChange}
                        onBlur={props.handleSubmit}
                    />
                    <span className='contact__icon contact__icon--phone'></span>
                    <label htmlFor='phone' className='contact__label'>Telefon</label>
                </div>
                <small
                    id='phoneError'
                    className='contact__error'>
                </small>
            </div>
            <div className='contact__form-group'>
                <div id='emailGroup' className='contact__input-wrapper'>
                    <span className='contact__icon contact__icon--email'></span>
                    <input
                        id='email'
                        type='text'
                        name='email'
                        className='contact__input'
                        required={true}
                        placeholder=''
                        pattern='^((?!\.)[\-\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$'
                        value={props.messageDetails.email}
                        onChange={props.handleChange}
                        onBlur={props.handleSubmit}
                    />
                    <span className='contact__icon contact__icon--email'></span>
                    <label htmlFor='email' className='contact__label'>E-mail</label>
                </div>
                <small
                    id='emailError'
                    className='contact__error'>
                </small>
            </div>
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
                        onChange={props.handleChange}
                        onBlur={props.handleSubmit}
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
            <button
                className='calc__res-list__btn'
                onClick={props.handleSubmit}>Küldés
            </button>
        </form>
    )
}

export default ContactForm