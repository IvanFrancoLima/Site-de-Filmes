var icone = window.document.querySelector('#hamburguer')
var menu = window.document.querySelector('#caminhos')

function tamanho_tela(){
    if(window.innerWidth>=970){
        icone.style.display='none';
        menu.style.display='block'
    }
}

function clickmenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}