// Requirements
import React from 'react'
import {Link} from 'react-router-dom'

const ThankYou = props => {
    // Text for creating the page
    const resultText = {
        success: {
            head: 'Köszönjük az üzenetét!',
            desc: 'Munkatársunk hamarosan felkeresi Önt!',
            icon: 'success',
            continueText: 'visszatérhet a főoldalra, vagy bezárhatja az oldalt',
            link: '/',
            buttonText: 'Kezdőlap'
        },
        failed: {
            head: 'Hiba történt az üzenetküldéskor!',
            desc: 'Sajnos nem sikerült elküldeni az üzenetet',
            icon: 'failed',
            continueText: 'térjen vissza az űrlaphoz, és próbálja meg újra!',
            link: '#',
            buttonText: 'Vissza'
        },
    }
    
    return (   
        props.status &&     
        <div className='thankYou'>
            <h1>{resultText[props.status].head}</h1>
            <p>{resultText[props.status].desc}</p>
            <span className={`contact__icon contact__icon--${props.status}`}></span>
            <p>Az alábbi gombbal {resultText[props.status].continueText}</p>
            <Link className='thankYou__link' to={resultText[props.status].link}>
                <button
                    className='calc__res-list__btn'
                    onClick={props.status === 'failed' ? props.retry : undefined}>{resultText[props.status].buttonText}
                </button>
            </Link>
        </div>
    )
}

export default ThankYou