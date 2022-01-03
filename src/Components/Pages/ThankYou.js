// Requirements
import React from 'react'
import {Link} from 'react-router-dom'

const ThankYou = props => {
    // Text for creating the page
    const resultText = {
        success: {
            head: 'Köszönjük az üzenetet!',
            desc: 'Munkatársunk hamarosan felkeres!',
            icon: 'success',
            continueText: 'visszatérhetsz a főoldalra, vagy bezárhatod az oldalt',
            link: '/',
            buttonText: 'Kezdőlap'
        },
        failed: {
            head: 'Hiba történt az üzenetküldéskor!',
            desc: 'Sajnos nem sikerült elküldeni az üzenetet',
            icon: 'failed',
            continueText: 'térj vissza az űrlaphoz, és próbáld meg újra!',
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
                    className={`thankYou__btn thankYou__btn--${props.status}`}
                    onClick={props.status === 'failed' ? props.retry : undefined}>{resultText[props.status].buttonText}
                </button>
            </Link>
        </div>
    )
}

export default ThankYou