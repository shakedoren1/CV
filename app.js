(function () {
    // switch between the different website sections
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // switch between light and dark mode on the website
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// get data from form
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const grade = document.getElementById('grade');
const message = document.getElementById('Message-area');
const btn = document.getElementById('btn');
const errorNode = document.getElementById('error');
const myEmail = 'shaked.oren.1@gmail.com'
const subject = 'I saw your awesome website and wanted to contact you!'

// activates when the send message button is clicked
btn.addEventListener('click', function(e) {
    e.preventDefault();
    validateForm();
})

// validate the data
function validateForm(){
    clearError();
    if (nameInput.value.length < 1){
        errorNode.innerText = "Name cannot be blank";
    } else if (!emailIsValid(email.value)){
        errorNode.innerText = "Invalid email address";
    } else if (grade.value.length < 1){
        errorNode.innerText = "A grade must be given";
    } else if (grade.value < 100){
        errorNode.innerText = "The grade given is too low";
    } else if (message.value.length < 1){
        errorNode.innerText = "Please enter a message";
    } else {
        sendEmail();
    }
}

// clearing the error messages from the form
function clearError(){
    errorNode.innerText = "";
}

// check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

// opening an email window with the ditails entered
function sendEmail(){
    const body = "From: " + nameInput.value + 
    " \nEmail: " + email.value + 
    " \nGrade: " + grade.value + 
    " \nMessage: " + message.value;
    window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`);
}
