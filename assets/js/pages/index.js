const infoAccessBtn = document.getElementById('btnAcesso');
const infoAccessMsg = document.querySelector('.info-access');
const closeInfoAccessMsg = document.querySelector('.closeBox');

// Mostra o card com as informações de login
infoAccessBtn.addEventListener('click', ()=>{
    infoAccessMsg.classList.add('show');
    infoAccessMsg.removeAttribute('inert');
});

// Fecha o card com as informações de login
closeInfoAccessMsg.addEventListener('click',()=>{
    infoAccessMsg.classList.remove('show');
    infoAccessMsg.setAttribute('inert', '');
});