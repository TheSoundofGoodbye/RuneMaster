//Clickable Rune Array
const runeContainer = document.querySelector(".runeContainer");
let runeDiv = '';
for (let i = 0; i < 34; i++) {
  runeDiv += 
  `
  <div class="rune">
    <input type="checkbox" id="rune${i}" class="runeBox" />
    <img src="img/rune${i}.png" id="runeImg${i}" class="runeImg" />
   </div>
   `;
  if (i%10 == 0){ runeDiv += `<br>`}
}
runeContainer.innerHTML = runeDiv;

//Rune table
const text = document.querySelectorAll("td");
text.forEach(item => {
  for (var i = 0; i < 34; i++) {
    item.innerHTML = item.innerHTML.replace(new RegExp("\\b"+"runeImg" + i+"\\b"),
      `<img src='img/rune${i}.png' class='runeImgSmall${i} runeImgSmall' />`)
  }
});

//Runeword Description
const wordDetail = document.querySelector("#wordDetail");
const runewordDetail = new Map();
runewordDetail.set('word0',`
  <div class="word" id="word0">
        <h3 class="wordTitle" id="wordTitle0">MissingNo</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc0">
        +10 To All SKills<br>
        +100% Faster Run/Walk<br>
        +1 To Teleport<br>
        50% Faster Cast Rate<br>
    </b>
    </div>
    `);
    runewordDetail.set('word1',`
    </div>
    <div class="word" id="word1">
        <h3 class="wordTitle" id="wordTitle1">Stealth</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc1">
        Magic Damage Reduced By 3<br>
        +6 To Dexterity<br>
        +15 To Maximum Stamina<br>
        Poison Resist +30%<br>
        Regenerate Mana 15%<br>
        25% Faster Run/Walk<br>
        25% Faster Cast Rate<br>
        25% Faster Hit Recovery<br>
        </b>
    </div>
    `);
    runewordDetail.set('word2',`
    </div>
    <div class="word" id="word2">
        <h3 class="wordTitle" id="wordTitle2">Enigma</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc2">
        +2 To All Skills<br>
        +45% Faster Run/Walk<br>
        +1 To Teleport<br>
        +750-775 Defense<br>
        + (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)<br>
        Increase Maximum Life 5%<br>
        Damage Reduced By 8%<br>
        +14 Life After Each Kill<br>
        15% Damage Taken Goes To Mana<br>
        + (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)<br>
        </b>
        </div>
    </div>
    `);

let wordDiv = '';

for (let i = 0; i < 3; i++) {
  wordDiv += runewordDetail.get(`word${i}`);
}
wordDetail.innerHTML = wordDiv;

//Click Script
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

//Runeword combination and show script
const runeTable = document.querySelector("#runeTable");
const runeTableBody = runeTable.querySelector("tbody");
console.log(runeTableBody);

function runewordShow() {
  //stealth
  if (runeBox[5].checked && runeBox[7].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //enigma
  if (runeBox[31].checked && runeBox[6].checked && runeBox[30].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
}
runewordShow();
document.addEventListener("click", runewordShow);

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