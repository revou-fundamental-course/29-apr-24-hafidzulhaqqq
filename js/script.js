// js validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameError.textContent = "Please enter your name properly.";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Please select your course.";
    isValid = false;
  }

  return isValid;
}

// js end validation

// js slider
const slider = document.querySelector(".col-1");
const slides = slider.querySelectorAll("li");

const slideCount = slides.length;
let activeSlide = 0;

setInterval(() => {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
}, 3000);
//js end slider
