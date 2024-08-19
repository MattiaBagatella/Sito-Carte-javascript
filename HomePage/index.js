let cartImg = document.getElementById ('imgCarrello');
let btnCarrello = document.getElementsByClassName ('btnCarrello');

function carrelloOn(){
    if (cartImg.src.match){
        cartImg.src = 'immaginiCarrello/carrello.jpg';
        // document.body.removeChild(cartLink);
        // cartLink.href=none;
    }
    else{
        cartImg.src = 'immaginiCarrello/carrelloVuoto.jpg';
    }
};

let dispCM = document.getElementById('cardmarket');
let dispVI = document.getElementById('vinted');
const hOne = document.getElementById('firstTitle');

let switchEcommerce = 'visibili';
function refLinkFunction(){
    switchEcommerce = 'nascosti' ;
    if(switchEcommerce == 'visibili'){
        console.log('link hidden');
    }
    else{
        console.log('link visible');
        dispCM.style.display = 'block';
        dispVI.style.display = 'block';
    }
};





