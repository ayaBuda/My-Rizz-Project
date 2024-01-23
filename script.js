const message = document.querySelector(".message");
const gif = document.querySelector(".gif");
const yesButton = document.querySelector(".yesButton");
const noButton = document.querySelector(".noButton");

yesButton.addEventListener("click", () => {
  message.innerHTML = "Mwah, see you on the 17th!";
  gif.src =
    "https://media4.giphy.com/media/5dUllWbKVlaqmMTvHb/giphy.gif?\
    cid=ecf05e47lu4gm5libvvqbnubhq74raovnmac2teapqnp0p4j&ep=v1_gifs_related&rid=giphy.gif&ct=g";
});

noButton.addEventListener('click', function() {
  alert('Sorry! "No" is not an option.');
});

// function getRandomCoordinate(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   noButton.addEventListener("mouseover", () => {
//     const noButtonRect = noButton.getBoundingClientRect();
//     const maximumX = window.innerWidth - noButtonRect.width;
//     const maximumY = window.innerHeight - noButtonRect.height;
  
//     const randX = getRandomCoordinate(maximumX);
//     const randY = getRandomCoordinate(maximumY);
  
//     noButton.style.left = randX + "px";
//     noButton.style.top = randY + "px";
//   });