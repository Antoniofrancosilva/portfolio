var botaoDark = document.getElementById("darkToggle");

botaoDark.onchange = function() {
  document.body.classList.toggle("dark");
  
}

var modal = document.getElementById("meuModal");
var tituloModal = document.getElementById("tituloModal");
var botaoFechar = document.querySelector(".fechar");


function abrirModal(nomeCard) {
tituloModal.textContent = nomeCard;
modal.style.display = "flex";
}


function fecharModal() {
modal.style.display = "none";
}


var cards = document.getElementsByClassName("card");


for (var i = 0; i < cards.length; i++) {
cards[i].onclick = function() {
  abrirModal(this.textContent);
}
}


botaoFechar.onclick = function() {
fecharModal();
}


window.onclick = function(event) {
if (event.target == modal) {
  fecharModal();
}
}