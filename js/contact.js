const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#tel");
const message = document.querySelector("#textarea");

const nameError = document.querySelector("#name-error");
const mailError = document.querySelector("#mail-error");
const phoneError = document.querySelector("#phone-error");
const messageError = document.querySelector("#message-error");
const formError = document.querySelector("#form-error");
const success = document.getElementById("form-success");

function validateContactForm() {
    event.preventDefault();

    if(checkLength(name.value, 2)=== true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    if (emailValidation(email.value) === true) {
        mailError.style.display = "none";
    } else {
        mailError.style.display = "block";
    }
    if (checkLength(phoneNumber.value, 7)  === true)  {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }
    if (checkLength(message.value, 25)  === true)  {
        formError.style.display = "none";
    } else {
        formError.style.display = "block";
    }
    if ((checkLength(name.value, 2) === true) && (emailValidation(email.value) === true) && (checkLength(phoneNumber.value, 7)  === true) && (checkLength(message.value, 25) === true)) {

        const thanks = document.querySelector("#contact-ref");

            thanks.innerHTML = "Thanks for writing us. We will be in touch.";
            thanks.style.display = "block";
            form.style.display = "none";
            success.style.display = "none";
    } else {
            success.style.background = "pink";
            success.innerHTML = "<p>Please check your inputs</p>";
            success.style.display = "block";

    }
}

form.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

//Subscribe section JavaScript

const sub = document.querySelector("#subscribe-button");
const subSection = document.querySelector("#sub-email");
const subSuccess = document.querySelector("#subscribe-success");

function validateSubscription() {
    if (emailValidation(subSection.value) === true) {
    subSuccess.style.display = "block";
    subSuccess.innerHTML = "Thank you for subscribing";
    subSection.style.display = "none";
    sub.style.display = "none";
} else {
    subSuccess.style.display = "block";
    subSuccess.innerHTML = "Not a valid email format";
}
}

sub.addEventListener("click", validateSubscription);
