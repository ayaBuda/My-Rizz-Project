// document.addEventListener("DOMContentLoaded", function () {
//     const myButton = document.getElementById("myButton");

//     myButton.addEventListener("mouseover", function () {
//         myButton.disabled = true;
//     });

//     myButton.addEventListener("mouseout", function () {
//         myButton.disabled = false;
//     });
// });

// const wrapper = document.querySelector(".wrapper");
const message = document.querySelector(".message");
const gif = document.querySelector(".gif");
const yesButton = document.querySelector(".yesButton");
const noButton = document.querySelector(".noButton");

yesButton.addEventListener("click", () => {
  message.innerHTML = "Yay, see you on the 17th!";
  gif.src =
    "https://giphy.com/gifs/boomerangtoons-tom-and-jerry-cat-5dUllWbKVlaqmMTvHb";
});

noButton.addEventListener("mouseover", () => {
  const noButtonRect = noButton.getBoundingClientRect();
  const maxX = window.innerWidth - noButtonRect.width;
  const maxY = window.innerHeight - noButtonRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});