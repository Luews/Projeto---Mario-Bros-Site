// OBJETIVO 1 - quando o usuário clicar no botão de ver trailer devemos abrir o modal com o vídeo do trailer


//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js

const fecharBotao = document.querySelector(".fechar-modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");


// passo 3 - dar um jeito de pegar o elemento da modal no js



// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js


// passo 2 - dar um jeito de identificar quando o usuário clicar no botão

botaoTrailer.addEventListener("click" , () => {


    // passo 4 - abrir a modal na tela (adicionar mais um item na lista "aberto")
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);


});

//OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal 


// passo 2 - dar um jeito de identificar quando o usuário clicar o X

fecharBotao.addEventListener("click", () =>{

    //passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");

} );








