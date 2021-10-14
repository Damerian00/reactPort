import React, { useState } from 'react'
import FormContact from './FormContact'
import FormSuccess from './FormSuccess'

const buttonSubmitEl = document.getElementsByClassName('btn-Submit')

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        console.log(buttonSubmitEl.value)
        setIsSubmitted(true)
    }
    return (
        <div>
           {!isSubmitted ? (
           <FormContact submitForm = {submitForm} />
           ) : (
           <FormSuccess />
           )}
        </div>
    )
}

export default Form
