// funções globais declaradas;

let cor = "size--selected--blue";
let currentElements = ["size--selected--blue","size--selected--red","size--selected--green","size--selected--orange","size--selected--black"];
let arrayButton = ["#2175f5","#f84848","#29b864","#ff5521","#444"];
let arrayBackground = ["var(--blue)","var(--red)","var(--green)","var(--orange)","var(--black)"];
let shoesBackground = ["./src/img/blue.png","./src/img/red.png","./src/img/green.png","./src/img/orange.png","./src/img/black.png"];

// seta o tema e cor selecionados
function colorChange(value){
  const items = document.querySelectorAll(".sample");
  const selectedStr = "sample--selected";
  const selectedShoe = "active";
  const sizeSelected = document.querySelectorAll(".size");
// percorre o array de buttons desmarca, após marca o selecionado
  for (const item of items) {
    if (item.classList.contains(selectedStr)) {
      document.querySelector(".shoeBackground").style.setProperty("background-image",arrayBackground[item.getAttribute("value")]);
      item.classList.remove(selectedStr);
      document.querySelector(".gradients").classList.remove("display");
    }
  }

  value.classList.add(selectedStr);
  cor = currentElements[value.getAttribute("value")];
  document.querySelector(".buy").style.setProperty("background-color",arrayButton[value.getAttribute("value")]);
  document.querySelector(".gradients").style.setProperty("background-image","#000");
  document.querySelector(".gradients").style.setProperty("background-image",arrayBackground[value.getAttribute("value")]);
  document.querySelector(".gradients").classList.remove("display");
  document.querySelector(".gradients").classList.add("display");
  document.querySelector(".shoe").src = shoesBackground[value.getAttribute("value")];
  document.querySelector(".display").style.animation = "";
  setTimeout(() => document.querySelector(".display").style.animation = "var(--action)",5);
}
// observa o button size seleciona e muda de cor, conforme a mesma selecionada
function changeSize(value){
  const items = document.querySelectorAll(".size");
  const selectedStr = cor;

  for (const item of items) {
    for(const element of currentElements){
      if (item.classList.contains(element)) {
        item.classList.remove(element);
        // item.style.setProperty("background-color", "#eee");
      }
    }
  }
  value.classList.add(selectedStr);
}