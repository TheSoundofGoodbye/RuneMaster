//Clickable Rune Array
const runeContainer = document.querySelector(".runeContainer");
let runeDiv = '';
for (let i = 1; i < 34; i++) {
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

function runewordShow() {
  //Leaf (TirRal)
  if (runeBox[3].checked && runeBox[8].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Lore (OrtSol)
  if (runeBox[9].checked && runeBox[12].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Nadir (NefTir)
  if (runeBox[4].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Rhyme (ShaelEth)
  if (runeBox[13].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Smoke (NefLum)
  if (runeBox[4].checked && runeBox[17].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Stealth (TalEth)
  if (runeBox[7].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Steel (TirEl)
  if (runeBox[3].checked && runeBox[1].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Strength (AmnTir)
  if (runeBox[11].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //White (DolIo)
  if (runeBox[14].checked && runeBox[16].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Zephyr (OrtEth)
  if (runeBox[9].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Prudence (MalTir)
  if (runeBox[23].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Splendor (EthLum)
  if (runeBox[5].checked && runeBox[17].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Ancient's Pledge (RalOrtTal)
  if (runeBox[8].checked && runeBox[9].checked && runeBox[7].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Black	Thul	Io	Nef
  if (runeBox[10].checked && runeBox[16].checked && runeBox[4].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Fury	Jah	Gul	Eth	
  if (runeBox[31].checked && runeBox[25].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //King's Grace	Amn	Ral	Thul	
  if (runeBox[11].checked && runeBox[8].checked && runeBox[10].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Lionheart	Hel	Lum	Fal
  if (runeBox[15].checked && runeBox[17].checked && runeBox[19].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Malice	Ith	El	Eth
  if (runeBox[6].checked && runeBox[1].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Melody	Shael	Ko	Nef	
  if (runeBox[13].checked && runeBox[18].checked && runeBox[4].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Radiance	Nef	Sol	Ith
  if (runeBox[4].checked && runeBox[12].checked && runeBox[6].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Venom	Tal	Dol	Mal
  if (runeBox[7].checked && runeBox[14].checked && runeBox[23].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Wealth	Lem	Ko	Tir
  if (runeBox[20].checked && runeBox[18].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Chaos	Fal	Ohm	Um	
  if (runeBox[19].checked && runeBox[27].checked && runeBox[22].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Crescent Moon	Shael	Um	Tir	
  if (runeBox[13].checked && runeBox[22].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Delirium	Lem	Ist	Io
  if (runeBox[20].checked && runeBox[24].checked && runeBox[16].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Duress	Shael	Um	Thul
  if (runeBox[13].checked && runeBox[22].checked && runeBox[10].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Enigma	Jah	Ith	Ber
  if (runeBox[31].checked && runeBox[6].checked && runeBox[30].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Gloom	Fal	Um	Pul
  if (runeBox[19].checked && runeBox[22].checked && runeBox[21].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Sanctuary	Ko	Ko	Mal
  if (runeBox[18].checked && runeBox[18].checked && runeBox[23].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Wind	Sur	Sur	El
  if (runeBox[29].checked && runeBox[29].checked && runeBox[1].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Dragon	Sur	Lo	Sol
  if (runeBox[29].checked && runeBox[28].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Dream	Io	Jah	Pul
  if (runeBox[16].checked && runeBox[31].checked && runeBox[21].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Edge	Tir	Tal	Amn
  if (runeBox[3].checked && runeBox[7].checked && runeBox[11].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Lawbringer	Amn	Lem	Ko
  if (runeBox[11].checked && runeBox[20].checked && runeBox[18].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Bone	Sol	Um	Um	
  if (runeBox[12].checked && runeBox[22].checked && runeBox[22].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Enlightenment	Pul	Ral	Sol	
  if (runeBox[21].checked && runeBox[8].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Myth	Hel	Amn	Nef	
  if (runeBox[15].checked && runeBox[11].checked && runeBox[4].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Peace	Shael	Thul	Amn
  if (runeBox[13].checked && runeBox[10].checked && runeBox[11].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Principle	Ral	Pul	Eld	
  if (runeBox[8].checked && runeBox[21].checked && runeBox[2].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Rain	Ort	Mal	Ith	
  if (runeBox[9].checked && runeBox[23].checked && runeBox[6].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Treachery	Shael	Thul	Lem	
  if (runeBox[13].checked && runeBox[10].checked && runeBox[20].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Pattern	Tal	Ort	Tir	
  if (runeBox[7].checked && runeBox[9].checked && runeBox[3].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Plague	Cham	Fal	Um	
  if (runeBox[32].checked && runeBox[19].checked && runeBox[22].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Holy Thunder	Eth	Ral	Ort	Tal
  if (runeBox[5].checked && runeBox[8].checked && runeBox[9].checked && runeBox[7].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Memory	Lum	Io	Sol	Eth
  if (runeBox[17].checked && runeBox[16].checked && runeBox[12].checked && runeBox[5].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Bramble	Ral	Ohm	Sur	Eth	
  if (runeBox[8].checked && runeBox[27].checked && runeBox[29].checked && runeBox[5].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Chains of Honor	Dol	Um	Ber	Ist	
  if (runeBox[14].checked && runeBox[22].checked && runeBox[30].checked && runeBox[24].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Exile	Vex	Ohm	Ist	Dol	
  if (runeBox[26].checked && runeBox[27].checked && runeBox[24].checked && runeBox[14].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Famine	Fal	Ohm	Ort	Jah	
  if (runeBox[19].checked && runeBox[27].checked && runeBox[9].checked && runeBox[31].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Hand of Justice	Sur	Cham	Amn	Lo
  if (runeBox[29].checked && runeBox[32].checked && runeBox[11].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Heart of the Oak	Ko	Vex	Pul	Thul	 
  if (runeBox[18].checked && runeBox[26].checked && runeBox[21].checked && runeBox[10].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Kingslayer	Mal	Um	Gul	Fal	
  if (runeBox[23].checked && runeBox[22].checked && runeBox[25].checked && runeBox[19].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Passion	Dol	Ort	Eld	Lem	 
  if (runeBox[14].checked && runeBox[9].checked && runeBox[2].checked && runeBox[20].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Stone	Shael	Um	Pul	Lum	
  if (runeBox[13].checked && runeBox[22].checked && runeBox[21].checked && runeBox[17].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Brand	Jah	Lo	Mal	Gul	
  if (runeBox[31].checked && runeBox[28].checked && runeBox[23].checked && runeBox[25].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Faith	Ohm	Jah	Lem	Eld
  if (runeBox[27].checked && runeBox[31].checked && runeBox[20].checked && runeBox[2].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Fortitude	El	Sol	Dol	Lo	 	
  if (runeBox[1].checked && runeBox[12].checked && runeBox[14].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Harmony	Tir	Ith	Sol	Ko
  if (runeBox[3].checked && runeBox[6].checked && runeBox[12].checked && runeBox[18].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Ice	Amn	Shael	Jah	Lo	
  if (runeBox[11].checked && runeBox[13].checked && runeBox[31].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Infinity	Ber	Mal	Ber	Ist	
  if (runeBox[30].checked && runeBox[23].checked && runeBox[30].checked && runeBox[24].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Insight	Ral	Tir	Tal	Sol	 
  if (runeBox[8].checked && runeBox[3].checked && runeBox[7].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Oath	Shael	Pul	Mal	Lum	 
  if (runeBox[13].checked && runeBox[21].checked && runeBox[23].checked && runeBox[17].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Phoenix	Vex	Vex	Lo	Jah	 
  if (runeBox[26].checked && runeBox[26].checked && runeBox[28].checked && runeBox[31].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Pride	Cham	Sur	Io	Lo	 
  if (runeBox[32].checked && runeBox[29].checked && runeBox[16].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Rift	Hel	Ko	Lem	Gul	
  if (runeBox[15].checked && runeBox[18].checked && runeBox[20].checked && runeBox[25].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Spirit	Tal	Thul	Ort	Amn	
  if (runeBox[7].checked && runeBox[10].checked && runeBox[9].checked && runeBox[11].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Voice of Reason	Lem	Ko	El	Eld	
  if (runeBox[20].checked && runeBox[18].checked && runeBox[1].checked && runeBox[2].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Wrath	Pul	Lum	Ber	Mal	 
  if (runeBox[21].checked && runeBox[17].checked && runeBox[30].checked && runeBox[23].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Honor	Amn	El	Ith	Tir	Sol	
  if (runeBox[11].checked && runeBox[1].checked && runeBox[6].checked && runeBox[3].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Beast	Ber	Tir	Um	Mal	Lum	
  if (runeBox[30].checked && runeBox[3].checked && runeBox[22].checked && runeBox[23].checked && runeBox[17].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Call To Arms	Amn	Ral	Mal	Ist	Ohm	
  if (runeBox[11].checked && runeBox[8].checked && runeBox[23].checked && runeBox[24].checked && runeBox[27].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Doom	Hel	Ohm	Um	Lo	Cham	
  if (runeBox[15].checked && runeBox[27].checked && runeBox[22].checked && runeBox[28].checked && runeBox[32].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Eternity	Amn	Ber	Ist	Sol	Sur	 
  if (runeBox[11].checked && runeBox[30].checked && runeBox[24].checked && runeBox[12].checked && runeBox[29].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Death	Hel	El	Vex	Ort	Gul	 	
  if (runeBox[15].checked && runeBox[1].checked && runeBox[26].checked && runeBox[9].checked && runeBox[25].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Destruction	Vex	Lo	Ber	Jah	Ko	
  if (runeBox[26].checked && runeBox[28].checked && runeBox[30].checked && runeBox[31].checked && runeBox[18].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Grief	Eth	Tir	Lo	Mal	Ral	
  if (runeBox[5].checked && runeBox[3].checked && runeBox[28].checked && runeBox[23].checked && runeBox[8].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Obedience	Hel	Ko	Thul	Eth	Fal
  if (runeBox[15].checked && runeBox[18].checked && runeBox[10].checked && runeBox[5].checked && runeBox[19].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Silence	Dol	Eld	Hel	Ist	Tir	Vex	
  if (runeBox[14].checked && runeBox[2].checked && runeBox[15].checked && runeBox[24].checked && runeBox[3].checked && runeBox[26].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Breath of the Dying	Vex	Hel	El	Eld	Zod	Eth	
  if (runeBox[26].checked && runeBox[15].checked && runeBox[1].checked && runeBox[2].checked && runeBox[33].checked && runeBox[5].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Last Wish	Jah	Mal	Jah	Sur	Jah	Ber
  if (runeBox[31].checked && runeBox[23].checked && runeBox[31].checked && runeBox[29].checked && runeBox[31].checked && runeBox[30].checked) {
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
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    wordPopup.innerHTML = wordDesc[num].innerHTML;
    wordPopup.classList.remove("invisible");
  })
  item.addEventListener('mouseout',function(){
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    wordPopup.classList.add("invisible");
  })
})