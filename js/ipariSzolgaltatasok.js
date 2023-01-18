rendszerHalozatokButton = document.getElementById("rendszerHalozatok");
kommunikaciosEszkozokButton = document.getElementById("kommunikaciosEszkozok");
automatizalasButton = document.getElementById("automatizalas");
egyebButton = document.getElementById("egyeb");

cards = document.getElementsByClassName("ipari_element_card");

document.getElementById("ipari-modal-body").onclick = function(e){
  if (e.target === rendszerHalozatokButton) addActive(0);
  else if (e.target === kommunikaciosEszkozokButton) addActive(1);
  else if (e.target === automatizalasButton) addActive(2);
  else if (e.target === egyebButton) addActive(3);
}

let addActive = (number) => {
  for(let i = 0; i < 4; i++) {
    if (i === number){
      cards[i].classList.add("aktiv");
    } else {
      cards[i].classList.remove("aktiv");
    }
  }
}