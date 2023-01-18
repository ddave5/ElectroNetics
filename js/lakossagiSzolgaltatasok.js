lakasokButton = document.getElementById("lakasok");
hazautomatizalasButton = document.getElementById("hazautomatizalas");

lakossagi_cards = document.getElementsByClassName("lakossagi_element_card");

document.getElementById("lakossagi-modal-body").onclick = function(e){
  if (e.target === lakasokButton) addActiveLakossagi(0);
  else if (e.target === hazautomatizalasButton) addActiveLakossagi(1);
}

let addActiveLakossagi = (number) => {
    if (0 === number){
      lakossagi_cards[0].classList.add("aktiv");
      lakossagi_cards[1].classList.remove("aktiv");
    } else {
      lakossagi_cards[1].classList.add("aktiv");
      lakossagi_cards[0].classList.remove("aktiv");
    }
}