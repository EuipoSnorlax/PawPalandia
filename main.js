/* ----------------------------------------
            Testimonial Slider
------------------------------------------- */
const testimonialSlider = () => {
    const carouselOne = document.getElementById('carouselOne');
    carouselOne && carouselOne.addEventListener('slid.bs.carousel', () => {
        const activeItem = carouselOne.querySelector(".active");
        document.querySelector(".js-testimonial-img").src = activeItem ? activeItem.getAttribute("data-js-testimonial-img") : '';
    });
};
testimonialSlider();




/* ----------------------------------------
            Validation Form
------------------------------------------- */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Validate the input fields
    if (validateForm()) {
        // Send the email if validation passes
        sendEmail();
    }
});

// Boring Option:
// function validateForm() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const telephone = document.getElementById('telephone').value;
//     const message = document.getElementById('message').value;
//     const errorMessage = document.getElementById('errorMessage');

//     errorMessage.innerHTML = ''; // Clear previous error messages

//     // Simple validation checks
//     if (!name) {
//         errorMessage.innerHTML += 'Name is required.<br>';
//         return false;
//     }
//     if (!validateEmail(email)) {
//         errorMessage.innerHTML += 'Invalid email format.<br>';
//         return false;
//     }
//     if (!validateTelephone(telephone)) {
//         errorMessage.innerHTML += 'Invalid telephone format.<br>';
//         return false;
//     }
//     if (!message) {
//         errorMessage.innerHTML += 'Message is required.<br>';
//         return false;
//     }

//     return true; // All validations passed
// }

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerHTML = ''; // Clear previous error messages

    // Validation checks
    const isNameValid = name ? true : (errorMessage.innerHTML += 'Name is required.<br>', false);
    const isEmailValid = validateEmail(email) ? true : (errorMessage.innerHTML += 'Invalid email format.<br>', false);
    const isTelephoneValid = validateTelephone(telephone) ? true : (errorMessage.innerHTML += 'Invalid telephone format.<br>', false);
    const isMessageValid = message ? true : (errorMessage.innerHTML += 'Message is required.<br>', false);

    return isNameValid && isEmailValid && isTelephoneValid && isMessageValid; // All validations passed
}


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateTelephone(telephone) {
    const telPattern = /^\d{10}$/; // Adjust pattern according to your requirements (e.g., regex for specific formats)
    return telPattern.test(telephone);
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    // Here you would normally send the email using a backend service or an API
    // For this example, we will just log the data to the console
    console.log("Sending email with the following data:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Telephone: ${telephone}`);
    console.log(`Message: ${message}`);

    // Clear the form after sending
    document.getElementById('contactForm').reset();
}
