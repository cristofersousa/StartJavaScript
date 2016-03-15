// Toogle em JavaScript para ocultar tasks
var botaoDicas = document.getElementById("btnInfo");

botaoDicas.onclick = myFunction;

function myFunction() {
   document.getElementById("regras").classList.toggle("show");
}

// adição de pessoa na listagem
var btnAdicionar = document.querySelector("#adicionar-pessoa");
                   btnAdicionar.addEventListener("click",function(event){
                   event.preventDefault(); //impede comportamento padrão do browser

    // pega valores da input

    var campoNome = document.querySelector("#campo-nome");
    var campoData = document.querySelector("#campo-dataNasc");
    var campoCPF  = document.querySelector("#campo-cpf");
    var campoCel  = document.querySelector("#campo-celular");

   // adicionar pessoa com os valores inseridos do form
   var addPessoa = "<tr class='pessoa'>" +
                   " <td class='info-nome'>"       + campoNome.value+"</td>"+
                   " <td class='info-dataNasc'>"   + campoData.value+"</td>"+
                   " <td class='info-cpf'>"        + campoCPF.value+"</td>"+
                   " <td class='info-celular'>"    + campoCel.value+"</td>"+
                   "<td><button type='button' class='btn btn-warning' onclick='excluir(this)'> <i class='fa fa-times'></i> Excluir  </button> </td>" +
                   "</tr>";

   var tabela = document.querySelector("table"); // retorna sempre o primeiro elemento
                tabela.innerHTML = tabela.innerHTML + addPessoa;
                campoNome.value = "";
                campoData.value = "";
                campoCPF.value = "";
                campoCel.value = "";

});



function excluir(elem) {
    elem.parentNode.parentNode.remove();
}
