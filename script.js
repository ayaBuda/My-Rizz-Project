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
    "https://www.bing.com/images/search?view=detailV2&ccid=97nBsPqf&id=5A8795AAEA124F29654E0E2BC028322943474490&thid=OIP.97nBsPqfU5pY1wKwa5-tBwHaFa&mediaurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2ff7b9c1b0fa9f539a58d702b06b9fad07%2ftenor.gif%3fitemid%3d15238868&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f7b9c1b0fa9f539a58d702b06b9fad07%3frik%3dkERHQykyKMArDg%26pid%3dImgRaw%26r%3d0&exph=364&expw=498&q=tom+and+jerry+love+gif&simid=608033220715033177&FORM=IRPRST&ck=E3AF4E802D0F781F62A48B31645CAFD8&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0";
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