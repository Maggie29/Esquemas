var divPadre = document.createElement("div");
var divHijo = document.createElement("div");
var divNieto = document.createElement("div");

document.body.appendChild(divPadre);
divPadre.setAttribute("id","padre");
divPadre.appendChild(divHijo);
divHijo.setAttribute("id", "hijo");
divHijo.appendChild(divNieto);
divNieto.setAttribute("id", "nieto");


var divFather = document.createElement("div");
var divChild1 = document.createElement("div");
var divChild2 = document.createElement("div");

document.body.appendChild(divFather);
divFather.setAttribute("id", "father");
divFather.appendChild(divChild1);
divChild1.setAttribute("id", "child1");
divFather.appendChild(divChild2);
divChild2.setAttribute("id", "child2");
