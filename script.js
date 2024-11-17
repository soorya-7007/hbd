const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');
const surpriseP = document.querySelector("div#surprise > p");
const surpriseImg = document.querySelector("div.couple-image>img");
let a = surpriseImg.getAttribute("src");

surpriseBtn.addEventListener('click', () => {
  surprise.classList.toggle('hidden');
  surpriseP.classList.toggle('hidden');
  if(a == "images/main.jpg"){
    surpriseImg.setAttribute("src", "images/card.jpg");
    a = surpriseImg.getAttribute("src");
  }
  else{
    surpriseImg.setAttribute("src", "images/main.jpg");
    a = surpriseImg.getAttribute("src");
  } 

  surpriseBtn.textContent = surprise.classList.contains('hidden')
    ? "Click for a Surprise!"
    : "Hide the Surprise";
  surpriseP.textContent = surprise.classList.contains('hidden')
    ? ""
    : "Cuto, you're the best thing that ever happened to me. 🥰 Love you forever! 💖";
});
