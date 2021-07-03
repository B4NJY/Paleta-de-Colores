
     
const colors = ["green", "red", "rgba(133,122,200)", "#f15025","violet",
"orange","yellow", "blue", "white", "black", "purple",
"brown" , "lightblue", "pink", "darkblue", "pink", "turquoise" , "fuchsia",
"golden","silver","chestnut","ivory","olive","rgb(255, 228, 196)", "rgb(255, 235, 205)","rgb(0, 0, 255)", "rgb(127, 255, 0)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}