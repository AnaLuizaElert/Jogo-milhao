// function startGame(){
//     document.getElementById('main').style.background = "transparent";
//     alert("Primeira dica: 😱");    
// }

var target1 = document.querySelector('#img1');
var target2 = document.querySelector('#img2');
var target3 = document.querySelector('#img3');
var target4 = document.querySelector('#img4');
var target5 = document.querySelector('#img5');
var target6 = document.querySelector('#img6');
var target7 = document.querySelector('#img7');
var target8 = document.querySelector('#img8');
var target9 = document.querySelector('#img9');
var target10 = document.querySelector('#img10');
var target11 = document.querySelector('#img11');
var target12 = document.querySelector('#img12');

if(target1){
    target1.addEventListener("markerFound", event => {
        // setInterval(
        //     alert("Parabéns!! Você encontrou a pintura 'O Grito' de Edvard Munch")
        // , 5000); 
        localStorage.setItem("Pontuacao", 1);
        alert("Próxima dica:  🌻");
    });
}

if(target2){
    target2.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Doze Girassóis' de Vincent van Gogh")
        , 5000); 
        localStorage.setItem("Pontuacao", 2);
        alert("Próxima dica:  🌃");
    });
}
if(target3){
    target3.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Noite Estrelada' de Vincent van Gogh")
        , 5000); 
        localStorage.setItem("Pontuacao", 3);
        alert("Próxima dica: 👩🏻");
    });
}


if(target4){
    target4.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Mona Lisa' de Leonardo da Vinci")
        , 5000); 
        localStorage.setItem("Pontuacao", 4);
        alert("Próxima dica:   🦶🏜");
    });
}

if(target5){
    target5.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Abaporu' de Tarsila do Amaral")
        , 5000); 
        localStorage.setItem("Pontuacao", 5);
        alert("Próxima dica:  🕰🫠🏜");
    });
}

if(target6){
    target6.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'A Persistência da Memória'de Salvador Dalí")
        , 5000); 
        localStorage.setItem("Pontuacao", 6);
        alert("Próxima dica: 🍞🍷");
    });
}

if(target7){
    target7.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'A Última Ceia' de Leonardo da Vinci")
        , 5000); 
        localStorage.setItem("Pontuacao", 7);
        alert("Próxima dica: ☂️👗");
    });
}

if(target8){
    target8.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Mulher com Sombrinha' de Claude Monet")
        , 5000); 
        localStorage.setItem("Pontuacao", 8);
        alert("Próxima dica:  👶🏼🪐");
    });
}


if(target9){
    target9.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'O Nascimento de Vênus' de Sandro Botticelli")
        , 5000); 
        localStorage.setItem("Pontuacao", 9);
        alert("Próxima dica: 💪💪🤚🤚🧔🏻‍♂️🦵🦵🦶🦶");
    });
}

if(target10){
    target10.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Homem Vitruviano' de Leonardo da Vinci")
        , 5000); 
        localStorage.setItem("Pontuacao", 10);
        alert("Próxima dica:  11 - 🫳🏻👈🏻");
    });
}

if(target11){
    target11.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'A Criacão de Adão' de Michelangelo")
        , 5000); 
        localStorage.setItem("Pontuacao", 11);
        alert("Próxima dica: 👨‍👩‍👧‍👦🏜💀");
    });
}

if(target12){
    target12.addEventListener("targetFound", event  => {
        setInterval(
            alert("Parabéns!! Você encontrou a pintura 'Retirantes' de Candido Portinari e GANHOU O JOGO!!!")
        , 5000); 
        localStorage.setItem("Pontuacao", 12);
    });
}

