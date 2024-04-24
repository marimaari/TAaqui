const botoes = document.querySelectorAll('.botao');
const abasConteudo = document.querySelectorAll('.aba-conteudo-item')
console.log(botoes)

for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

    botoes[i].addEventListener('click', function{

    for(let j=0;j<botoes.length;j++) { 
        botoes[j].classList.remove('ativo');
    }
    botoes[i].classList.add('ativo');
    }
}

