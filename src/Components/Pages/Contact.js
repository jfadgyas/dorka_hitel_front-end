// Requirements
import React, {useState, useEffect} from "react"
import ContactForm from "./ContactForm"
import Progress from "./Progress"
import ThankYou from "./ThankYou"
import '../../style/contact.css'

const Contact = () => {
/*
Link to active social media accounts
Redirect to a thank you page that explains when and how you'll be contacting them and links to helpful content and resources.

monday-friday 8-1700
after fill out, one of our advisors will reach out to you to schedule time with you
*/

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
    const handleChange = e => {
        const {name, value} = e.target
        setMessageDetails({...messageDetails, [name]: value})
    }

    // Validating contact form
    const handleSubmit = e => {
        e.preventDefault()
        // Check if fields are in the right format
        let formInputs = []
        e.type === 'blur' ? formInputs = [e.target] : formInputs = Array.from(document.forms['contactForm'].elements).filter(item => item.type !== 'submit')
        formInputs.map(item => {
            if (item.validity.valueMissing){
                return setErrorMsg(item.name, `Ne hagyja üresen a ${item.labels[0].innerText.toLowerCase()} mezőt!`)
            }
            if (item.validity.patternMismatch){
                return setErrorMsg(item.name, `Hibás ${item.labels[0].innerText.toLowerCase()} formátum!`)
            }
            return setErrorMsg(item.name, '')
        })
        if (e.type === 'click' && document.forms.contactForm.checkValidity()){
            // Show waiting screen, post message, wait for response, reset state?
            // Set posting to true, so useEffect will handle the progress screen
            setProgress({...progress, isPosting: true})
            postMessage()            
            // setMessageDetails({
            //     firstName: '',
            //     phone: '',
            //     email: '',
            //     message: '',
            //     isNewMsg: true,
            //     isDone: false
            // })
        }
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
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {progress.isPosting && <Progress progress={progress}/>}
            {progress.counter === 100 && <ThankYou status={progress.status} retry={retry}/>}
        </section> 
    )
}

export default Contact