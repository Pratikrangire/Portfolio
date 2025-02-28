var typed = new Typed(".text",{
    strings:["Data Analyst"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const form = document.forms["contact-form"];
    
    // Manually submit the form
    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form
        } else {
            alert('Failed to submit the form.');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
    });
}