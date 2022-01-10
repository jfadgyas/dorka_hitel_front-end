// Requirements
import React, {useState, useRef, useEffect} from "react"
import ContactForm from "./ContactForm"
import Progress from "./Progress"
import ThankYou from "./ThankYou"
import '../../style/contact.css'

const Contact = () => {

    // States: message, progress helpers
    const [messageDetails, setMessageDetails] = useState({
        firstName: '',
        phone: '',
        email: '',
        message: '',
        isNewMsg: true,
        isDone: false
    })
    const [progress, setProgress] = useState({
        counter: 0,
        isPosting: false,
        status: 'failed'
    })

    // Input fileds
    const inputs = [
        {
            labelText: 'Név',
            icon: 'contact__icon contact__icon--name',
            className: 'contact__input',
            id: 'firstName',
            name: 'firstName',
            type: 'text',
            required: true,
            placeholder: ' ',
            pattern: /[\w\s]+/,
            autoComplete: 'name'
        },
        {
            labelText: 'Telefon',
            icon: 'contact__icon contact__icon--phone',
            className: 'contact__input',
            id: 'phone',
            name: 'phone',
            type: 'tel',
            required: true,
            placeholder: ' ',
            pattern: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            autoComplete: 'phone'
        },
        {
            labelText: 'E-mail',
            icon: 'contact__icon contact__icon--email',
            className: 'contact__input',
            id: 'email',
            name: 'email',
            type: 'email',
            required: true,
            placeholder: ' ',
            pattern: /^((?!\.)[-\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
            autoComplete: 'email'
        },
    ]

    // Input refs
    const inputRef = useRef([])

    // Progress circle animation
    useEffect(() => {
        if (progress.isPosting){
            document.forms['contactForm'].classList.add('posting')
            document.querySelector('.progress').classList.add('posting')
            const progressTimer = setInterval(() => {
                if (progress.counter < 100){
                    setProgress({...progress, counter: progress.counter + 1})
                    document.documentElement.style.setProperty('--progress', `${910 * (100 - progress.counter) / 100}`) // 910 is the full circle, the rest is the percentage to show
                }
                else{
                    // If progress is 100%, clear timer, and show result screen
                    setTimeout(() => {
                        document.querySelector('.progress').classList.add('posted')
                        document.querySelector('.thankYou').classList.add('posted', `posted--${progress.status}`)
                    }, 500)
                    clearInterval(progressTimer)
                }
                // progress.counter<100 ? setProgress({...progress, counter: progress.counter + 1}) : clearInterval(progressTimer)
                }, 350) // Takes app. 40sec to wake up back-end, and get a response
            return () => clearInterval(progressTimer)
        }               
    })

    // Handle keypress
    // If enter pressed move to the next input field, otherwise set the state
    const handleKey = (e, index) => {
        if (e.key === 'Enter'){
            index === inputRef.current.length-1 ? console.log('submit') : inputRef.current[index+1].focus()
            return
        }
        const {name, value} = e.target
        setMessageDetails({...messageDetails, [name]: value})
    }

    // Handle submit
    const handleSubmit = e => {
        e.preventDefault()
        const formInputs = Array.from(document.forms['contactForm'].elements).filter(item => item.type !== 'button')
        const isValidField = formInputs.map(item => validate(item))
        if (isValidField.every(item => item === true)){
            // Show waiting screen, post message, wait for response, reset state?
            // Set posting to true, so useEffect will handle the progress screen
            setProgress({...progress, isPosting: true})
            postMessage()
        }
    }

    // Validating contact form
    // Using e.target as field, or e as field if we pass it from submit
    // Check if the field is in the rigtht format, return the result
    const validate = e => {
        const field = e.target || e
        // Value missing
        if (field.validity.valueMissing) return setErrorMsg(field.name, `Ne hagyja üresen a ${field.labels[0].innerText.toLowerCase()} mezőt!`)
        // Pattern mismatch
        if (field.validity.patternMismatch) return setErrorMsg(field.name, `Hibás ${field.labels[0].innerText.toLowerCase()} formátum!`)
        // No errors
        setErrorMsg(field.name, '')
        return true
    }

    // Set error message for form elements
    const setErrorMsg = (input, msg) => {
        if (msg){
            document.querySelector(`#${input}Group`).classList.remove('valid', 'active')
            document.querySelector(`#${input}Group`).classList.add('invalid')
        }
        else{
            document.querySelector(`#${input}Group`).classList.remove('invalid', 'active')
            document.querySelector(`#${input}Group`).classList.add('valid')
        }
        document.querySelector(`#${input}Error`).innerText = msg
    }

    // Post new message
    const postMessage = async () => {
        const URL = `https://deadpan-hill-twine.glitch.me/db/TD2/Message`
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(messageDetails)
        }
        try {
            await fetch(URL, options).then(res => {
                // If response is ok-created, set status to successfull
                // Set counter to 99 for visual purpose, don't know why isPosting will be reset to false?
                res.status === 201 && setProgress({...progress, counter: 99, isPosting: true, status: 'success'})
            })
        }
        catch(err){
            // If response is error, set status to failed. Not neccessary, just to be sure. Set counter to 99 for visual purpose
            setProgress({...progress, counter: 99, isPosting: true, status: 'failed'})
            console.log(err)
        }
    }

    // Get back to the form to resend it
    const retry = () => {
        document.querySelector('.thankYou').classList.remove('posted')
        document.querySelector('.progress').classList.remove('posted', 'posting')
        document.forms['contactForm'].classList.remove('posting')
        setProgress({...progress, counter: 0, isPosting: false, status: 'failed'})
    }

    return (
        <section className='contact'>
            <ContactForm
                messageDetails={messageDetails}
                inputs={inputs}
                inputRef={inputRef}
                handleKey={handleKey}
                validate={validate}
                handleSubmit={handleSubmit}
            />
            {progress.isPosting && <Progress progress={progress}/>}
            {progress.counter === 100 && <ThankYou status={progress.status} retry={retry}/>}
        </section> 
    )
}

export default Contact