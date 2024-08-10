// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const contactPage = document.getElementById('contact-page');
    

    //waits for a click then begins the submisson but prevents the default form submisson
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        // Create the thank you message to be displayed once the page has been submitted and using css to make the size 24px and add 20px of space from the top 
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = "Thank you for your message!";
        thankYouMessage.style.fontSize = '24px';
        thankYouMessage.style.marginTop = '20px'; 
     

        // Replace the page with the thank you message that was created , then using css to display it and centre it as well as adding 40px of space from the top
        contactPage.innerHTML = ''; 
        contactPage.style.display = 'block'; 
        contactPage.style.textAlign = 'center'; 
        contactPage.style.paddingTop = '40px'; 
        contactPage.appendChild(thankYouMessage); 
    });
});
