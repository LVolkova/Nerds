let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");
let buttonThree = document.querySelector(".button-three");
let firstSlide = document.querySelector(".feature-item:nth-child(1)");
let secondSlide = document.querySelector(".feature-item:nth-child(2)");
let thirdSlide = document.querySelector(".feature-item:nth-child(3)");

buttonOne.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonOne.classList.add("current");
  firstSlide.classList.add("slide-current");
  buttonTwo.classList.remove("current");
  secondSlide.classList.remove("slide-current");
  buttonThree.classList.remove("current");
  thirdSlide.classList.remove("slide-current");
});

buttonTwo.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonOne.classList.remove("current");
  firstSlide.classList.remove("slide-current");
  buttonTwo.classList.add("current");
  secondSlide.classList.add("slide-current");
  buttonThree.classList.remove("current");
  thirdSlide.classList.remove("slide-current");
});

buttonThree.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonOne.classList.remove("current");
  firstSlide.classList.remove("slide-current");
  buttonTwo.classList.remove("current");
  secondSlide.classList.remove("slide-current");
  buttonThree.classList.add("current");
  thirdSlide.classList.add("slide-current");
});