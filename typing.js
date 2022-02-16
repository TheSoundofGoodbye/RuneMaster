//Overlay typing show
let overlay = document.querySelector("#overlay");

let search = "";
let runewordName = document.getElementsByClassName("showLayer");

document.addEventListener('keypress', logKey);

function logKey(e) {
    let isLetter = /^[a-z]$/i.test(e.key);
    if(isLetter) {
        let pressedKey = e.key.toUpperCase();
        overlay.textContent += pressedKey;
        search += pressedKey;
        overlay.classList.add("fadein");
        overlay.classList.remove("hidden");
    }
}

//Clearing if you dont type 1sec (1000)
document.addEventListener('keypress', timeOutClearing);
let clearText;
let timeToClear = 1000;

function timeOutClearing(){
    clearTimeout(clearText);
    clearText = setTimeout(clearOverlayAndSearch,timeToClear);
}

function clearOverlayAndSearch(){
    overlay.textContent = "";
    search = "";
    overlay.classList.remove("fadein");
    overlay.classList.add("hidden");
}

//if search matched with runeword name, then Highlight
document.addEventListener('keypress', checkMatch);
function checkMatch(e){
    for(i=0;i<runewordName.length;i++){
        runewordName[i].style.color = "";
        if(runewordName[i].textContent.toUpperCase().includes(search)){
            runewordName[i].style.color = "red";
        }
    }
}
document.onkeydown = function(e) {
    e = e || window.event;
    var isEscape = false;
    if ("key" in e) {
        isEscape = (e.key === "Escape" || e.key === "Esc");
    } 
    if (isEscape) {
        for(i=0;i<runewordName.length;i++){
            runewordName[i].style.color = "";
        }
        overlay.classList.remove("fadein");
        overlay.classList.add("hidden");
    }
};


