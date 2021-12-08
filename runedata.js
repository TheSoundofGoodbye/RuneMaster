const text = document.querySelectorAll("td");
text.forEach(item => {
    for (var i = 0; i < 5; i++) {
        item.innerHTML = item.innerHTML.replace("runeImg"+i,
            `<img src='img/rune${i}.png' class='runeImgSmall${i} runeImgSmall' />`)
    }
});

function runewordShow(){
    //stealth
    if(runeBox[5].checked && runeBox[7].checked){
      word[1].classList.remove("hidden");
    } else {
      word[1].classList.add("hidden");
    }
    //enigma
    if(runeBox[31].checked && runeBox[6].checked && runeBox[30].checked){
      word[2].classList.remove("hidden");
    } else {
      word[2].classList.add("hidden");
    }
  }
  runewordShow();
  document.addEventListener("click",runewordShow);