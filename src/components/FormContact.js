import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'

function FormContact(submitForm) {
    
const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm, 
    validate
    );

    return (
        <form className="form" onSubmit={handleSubmit}>
         <h1>Please fill out the form below to get in contact with me.</h1>
         <div className ="form-inputs">
         <label htmlFor = "name" className = "form-label"> Name: </label>
         <input id="contactName" type="text" name = "name" className = "form-input" placeholder = "Enter your name here" value={values.name} onChange={handleChange} />
         {errors.name && <p>{errors.name}</p>}
         <label htmlFor = "email" className = "form-label"> Email: </label>
         <input id="contactEmail" type="text" name = "email" className = "form-input" placeholder = "Enter your name here" value={values.email} onChange={handleChange}/>
         {errors.email && <p>{errors.email}</p>}
         <label htmlFor = "message" className = "form-label"> Your message: </label>
         <textarea id="contactMessage" name= "message" className="form-control" rows="5" value={values.message} onChange={handleChange}></textarea> 
         {errors.message && <p>{errors.message}</p>}       
         </div>   
         <button className= "btn-Submit" type="submit">Contact Me</button>
        </form>
    )
}

export default FormContact
