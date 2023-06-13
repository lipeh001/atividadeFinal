const botaoAbrirMenu = document.querySelector('#menu-ham')

function clickMenu(){
    const divNav = document.querySelector('#nav-oculta')
    divNav.classList.toggle('nav-o')
}

botaoAbrirMenu.addEventListener('click', clickMenu)



const botaoMudaClasse =document.getElementById('muda')


function mudaClasse(){
    document.body.classList.toggle('dark')
}

botaoMudaClasse.addEventListener('change', mudaClasse)