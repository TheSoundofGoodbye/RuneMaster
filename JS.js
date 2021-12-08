const runeImg = document.querySelectorAll(".runeImg");
const runeBox = document.querySelectorAll("input.runeBox");
const word = document.querySelectorAll(".word");

runeImg.forEach(function(item) {
  item.addEventListener('click', function() {
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    item.classList.toggle("selected");
    runeBox[num].checked = !runeBox[num].checked;

  });
});

function runewordShow(){
  //stealth
  if(runeBox[3].checked && runeBox[4].checked){
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //enigma
  if(runeBox[1].checked && runeBox[2].checked && runeBox[4].checked){
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
}
const runeImgSmall = document.querySelectorAll(".runeImgSmall");

function runeHighlight(){
  if(runebox[0].checked){
    runeImgSmall[0].
  }
}
runewordShow();
document.addEventListener("click",runewordShow);
document.addEventListener("click",runeHighlight);

const wordTitle = document.querySelectorAll(".wordTitle");
const wordDesc = document.querySelectorAll(".wordDesc");
const wordPopup = document.querySelector("#wordPopup");

wordTitle.forEach(function(item){
  item.addEventListener('mouseover', function(){
    console.log("mouse in");
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    console.log(num);
    console.log(wordDesc[num]);
    wordPopup.innerHTML = wordDesc[num].innerHTML;
    wordPopup.classList.remove("invisible");
  })
  item.addEventListener('mouseout',function(){
    console.log("mouser out");
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    console.log(num);
    wordPopup.classList.add("invisible");
  })
})