// Requests
import React, {useState, useEffect} from 'react'
import CalcRequest from './Calc-Request'
import CalcResult from './Calc-Result'

const Calc = (props) => {
    // Variables
    // set conditions (maybe from the server?)
    // set loanType if comes from a link or menu item
    const loanConditions = [
        {
            loanType: 'personal',
            hunName: 'Személyi kölcsön',
            minLoan: 200000,
            maxLoan: 8000000,
            minYear: 1,
            maxYear: 8
        },
        {
            loanType: 'home',
            hunName: 'Lakáshitel',
            minLoan: 500000,
            maxLoan: 100000000,
            minYear: 3,
            maxYear: 30
        },
        {
            loanType: 'baby',
            hunName: 'Babaváró',
            minLoan: 300000,
            maxLoan: 10000000,
            minYear: 5,
            maxYear: 20
        },
        {
            loanType: 'csok',
            hunName: 'CSOK',
            minLoan: 200000,
            maxLoan: 8000000,
            minYear: 1,
            maxYear: 8
        },
    ]
    const [loanRequest, setLoanRequest] = useState({
        loanType: props.loanType,
        salary: '',
        loan: '',
        year: '',
        isValid: false
    })
    const [loanResult, setLoanResult] = useState([])

    useEffect(() => {
        // Switch the background color according to the loan type (tiles)
        let color
        switch (loanRequest.loanType){
            case 'personal':
                color = '#3dc0fd'
                break
            case 'home':
                color = '#31cf1c'
                break
            case 'auto':
                color = '#FCA53D'
                break
            case 'baby':
                color = '#FC566C'
                break
            case 'csok':
                color = '#FC7749'
                break
            default: 
                color = '#3dc0fd'
        }
        document.documentElement.style.setProperty('--calcBackground', color)
    }, [loanRequest.loanType])

    // Handle typing in the request form
    const handleChange = e => {
        e.preventDefault()
        // If keypress=enter next input? keyup event
        // Should use the value, but that's a string and I need a number
        // Check if it's a number, if not => error
        const {type, name, value, valueAsNumber, validity} = e.target        
        if (validity.badInput || validity.typeMismatch){
            return setErrorMsg(name, 'Csak számokat írjon!')
        }
        type === 'select-one' ? setLoanRequest({...loanRequest, [name]: value, isValid: false}) : setLoanRequest({...loanRequest, [name]: valueAsNumber, isValid: false})
    }

    // Validating request form
    const validate = e => {
        e.preventDefault()
        // Check if fields are in the right format, and in range
        let formInputs = []
        e.type === 'blur' ? formInputs = [e.target] : formInputs = Array.from(document.forms['requestForm'].elements).filter(item => item.type !== 'submit')
        formInputs.map(item => {
            if (item.validity.valueMissing){
                return setErrorMsg(item.name, `Ne hagyja üresen a ${item.labels[0].innerText.toLowerCase()} mezőt!`)
            }
            if (item.validity.badInput || item.validity.typeMismatch){
                return setErrorMsg(item.name, 'Csak számokat írjon!')
            }
            if (item.validity.rangeUnderflow){
                return setErrorMsg(item.name, `${item.labels[0].innerText} minimum ${item.min} lehet!`)
            }
            if (item.validity.rangeOverflow){
                return setErrorMsg(item.name, `${item.labels[0].innerText} maximum ${item.max} lehet!`)
            }
            return setErrorMsg(item.name, '')
        })
        if (e.type === 'click' && document.forms.requestForm.checkValidity()){
            postLoanRequest()            
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

    // Posting the loan request, getting back the result
    const postLoanRequest = async () => {
        const URL = `https://deeply-solstice-mastodon.glitch.me/${loanRequest.loanType}`
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(loanRequest)
        }
        try {
            const data = await fetch(URL, options).then(res => res.json())
            setLoanResult(data)
            setLoanRequest({...loanRequest, isValid: true})
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <section id='calc'>
            <CalcRequest
                loanConditions={loanConditions.find(item => item.loanType === loanRequest.loanType)}
                loanRequest={loanRequest}
                handleChange={handleChange}
                handleSubmit={validate}
            />
            {loanRequest.isValid ? <CalcResult loanResult={loanResult}/> : null}
        </section>
    )
}

export default Calc