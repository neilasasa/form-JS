var tabela = document.querySelector("#tabela-pacientes");
// var tabelaTitulo = document.querySelector("th");

tabela.addEventListener("dblclick", function (event) {
    // if (event.target != tabelaTitulo) {
    //     event.target.parentNode.remove();
    // }

    event.target.parentNode.classList.add("fadeOut"); //utilisamos parentNode para que a linha tr ocorra o fade out

    setTimeout(function () {
        //SEGUNDA OPCAO PARA NAO REMOVER th NA TABELA
        if (event.target.tagName == "TD") {
            event.target.parentNode.remove();
        }
    }, 500);

});