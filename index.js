const counter = document.querySelector(".counter");
const followers = document.querySelector(".followers");

let count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on Instagram!";
}, 13000);
