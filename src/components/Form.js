import React, { useState } from 'react'
import FormContact from './FormContact'
import {Link} from 'react-router-dom'

const buttonSubmitEl = document.getElementsByClassName('btn-Submit')

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        console.log(buttonSubmitEl.value)
        setIsSubmitted(true)
    }
    return (
        <div>
           <FormContact submitForm = {submitForm} />
           <Link to='/reactPort'>
                <button className="btnHome">Home</button>
                </Link>
         
        </div>
    )
}

export default Form
