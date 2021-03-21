const popupLink = document.querySelector(".map-button");
const popup = document.querySelector(".feedback");
const popupClose = document.querySelector(".feedback-close");
const popupForm = popup.querySelector(".feedback-form");
const userName = popup.querySelector(".name");
const userEmail = popup.querySelector(".email");
const userComment = popup.querySelector(".comment");

let isStorageSupport = true;
let nameStorage = "";
let emailStorage = "";

try {
  nameStorage = localStorage.getItem("name");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

popupLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  if (nameStorage && emailStorage) {
    userName.value = nameStorage;
    userEmail.value = emailStorage;
    userComment.focus();
  } else {
  userName.focus(); 
  }
});

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
});

popupForm.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userComment.value) {
  evt.preventDefault();
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("email", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-feedback-show");
    }
  }
});