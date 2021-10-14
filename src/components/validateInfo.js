export default  function validateInfo(values) {
    let errors = {}
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!values.name.trim()) {
    errors.name = "Name Required"
}

if(!values.name.trim()) {
    errors.name = "Name Required"
} else if (!regex.test(values.email)) {
    errors.email = "Email address is invalid"
}
if (!values.message){
errors.message = "Message is required"
}else if (values.message.length < 6) {
errors.message = "Please add more text to your message."

}

return errors;
}