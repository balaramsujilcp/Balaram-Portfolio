let menu = document.querySelector("#menu-icon-js");
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navtc = document.querySelector("#nav-tc-js");

menu.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  navtc.classList.toggle("nav-touch-close-open");
};

navtc.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.remove("open");
  navtc.classList.remove("nav-touch-close-open");
  navtc.classList.remove("nav-tc-z");
  navtc.classList.remove("nav-LR-TC");
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  document.getElementById("header").classList.add("scrolled");
  if (currentScrollPos === 0) {
    document.getElementById("header").classList.remove("scrolled");
  }
  if (navtc.classList.contains("nav-touch-close-open")) {
    return;
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const csaOK = document.querySelector(".csa-ok");
const contactForm = document.querySelector(".contact-form");
const pagesWithSmoothScroll = [
  "/certificate.html",
  "/education.html",
  "/skills.html",
];

const isSmoothScrollPage = pagesWithSmoothScroll.includes(
  window.location.pathname
);

if (csaOK) {
  csaOK.onclick = () => {
    contactSubmitAfter.classList.remove("show");
    formSection.classList.remove("hide");
    contactSection.classList.remove("csa-cs");
    contactForm.classList.remove("csa-cf");
    contactButton.classList.remove("loading");
    contactLoad.classList.remove("show");
    submitText.classList.remove("hide");
  };
}

function validateForm(event) {
  let isValid = true;
  emailIsValid = true;
  nameIsValid = true;
  messageIsValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    nameIsValid = false;
  }

  if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
    isValid = false;
    if (emailInput.value.trim() !== "" && !isValidEmail(emailInput.value)) {
      emailIsValid = false;
    }
  }

  if (messageInput.value.trim() === "") {
    isValid = false;
    messageIsValid = false;
  }

  if (!isValid) {
    errorDiv.classList.add("error-show");
    emailErrorDiv.classList.remove("error-show");
    if (nameIsValid && messageIsValid && !emailIsValid) {
      errorDiv.classList.remove("error-show");
      emailErrorDiv.classList.add("error-show");
    }
    event.preventDefault();
  } else {
    contactButton.classList.add("loading");
    contactLoad.classList.add("show");
    submitText.classList.add("hide");
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

if (contactForm) {
  contactForm.addEventListener("submit", validateForm);
}

if (isSmoothScrollPage) {
  const backToTopBtn = document.getElementById("back-to-top-btn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
