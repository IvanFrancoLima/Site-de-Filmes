var icone = window.document.querySelector('#hamburguer')
var menu = window.document.querySelector('#caminhos')


function tamanho_de_tela(){
    if(window.innerWidth>=970){
        icone.style.display='none';
        menu.style.display='block';
    }else{
        icone.style.display='block';
        menu.style.display='none';
    }
}

function tamanho_tela(){
    if(window.innerWidth>=970){
        icone.style.display='none';
        menu.style.display='block';
    }else{
        icone.style.display='block';
        menu.style.display='none';
    }
}

function clickmenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}