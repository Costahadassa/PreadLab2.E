let name = prompt("Qual é o seu nome?");

document.getElementById('name').innerHTML = "Olá, " + name + ".";
prompt("Você quer participar do quiz?")
let txt;
let confirmation = prompt("Clique em 1 para Fazer o teste ou 2 para Encerrar");
if (confirmation == 2) {
  txt = "Você não aceitou o quiz!";
} else {
  txt = "Você não aceitou o teste";

  let question1 = prompt("Em que ano foi descoberto o Brasil? \n 1) 1500\n 2) 1522\n 3) 1400");
const answer1 = "2";
let question2 = prompt("Qual a idade do Silvio Santos? \n 1) 89 \n 2) 91 \n 3) 79");
const answer2 = "2";
let question3 = prompt("Quanto é 10 + 2? \n 1) 10 \n 2) 12 \n 3) 0");
const answer3 = "2";


if(question1 == answer1) {
  document.getElementById('a1').innerHTML = "Resposta 1";
} else {
  document.getElementById('a5').innerHTML = "Resposta 1"; 
}

if(question2 == answer2) {
  document.getElementById('a2').innerHTML = "Resposta 2";
} else {
  document.getElementById('a6').innerHTML = "Resposta 2"; 
}

if(question3 == answer3) {
  document.getElementById('a3').innerHTML = "Resposta 3";
} else {
  document.getElementById('a7').innerHTML = "Resposta 3"; 
}

if(question4 == answer4) {
  document.getElementById('a4').innerHTML = "Resposta 4";
} else {
  document.getElementById('a8').innerHTML = "Resposta 4"; 
}

}

window.alert(txt)



/*function adicionar(){
    let corretas = document.getElementById("p1").value;
    let listar = document.getElementById("listaCorretas").innerHTML;
    listar = listar + "<li>"+corretas+"</li>";

    document.getElementById("listar").innerHTML = lista;
    
}*/

   