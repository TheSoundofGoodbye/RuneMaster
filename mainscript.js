//Make clickable Rune Array
const runeContainer = document.querySelector(".runeArray");
let runeDiv = '';
for (let i = 0; i < 34; i++) {
  runeDiv += 
  `
  <div class="rune">
    <input type="checkbox" id="rune${i}" class="runeBox" />
    <img src="img/rune${i}.png" id="runeImg${i}" class="runeImg" />
   </div>
   `;
}
runeContainer.innerHTML = runeDiv;

const runeImg = document.querySelectorAll(".runeImg");
const runeBox = document.querySelectorAll("input.runeBox");
const word = document.querySelectorAll(".word");
const runeImgSmall = document.querySelectorAll(".runeImgSmall");

runeImg.forEach(function(item) {
  item.addEventListener('click', function() {
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    item.classList.toggle("selected");
    runeBox[num].checked = !runeBox[num].checked;
  });
});

function runeHighlight(){
  const runes = [];
  for(let i = 0; i < runeBox.length; i++){
    runes.push(document.querySelectorAll('.runeImgSmall'+i));
  }
  for (let i = 0; i < 6; i++) { //the number of runeslot = 6
    for (let j = 0; j < runeBox.length; j++) { //the number of runes
      const runeC = runes[j][i];
      if (runeC == null) {
        continue;
        } else {
        if (runeBox[j].checked) {
          runeC.classList.add('highlight');
        } else if (!runeBox[j].checked) {
          runeC.classList.remove('highlight');
        }
      }
    }
  }
}

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