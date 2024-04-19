$(document).ready(function(){

    $('form').on('submit', function(e){

        e.preventDefault();
        const novoItem = $('#novo-item-lista').val();
        const novaLista = $('<li></li>');
        /*$(`<li>"${novoItem}"</li>`).appendTo(novaLista);*/
        $(`<button id="item" type="submit">${novoItem}</button>`).appendTo(novaLista);
        $(novaLista).appendTo('ul');

        $('#novo-item-lista').val('');  

        const itemFinalizado = document.querySelectorAll('#item');  /* trecho aonde insiro um evento aonde o assim que o click acontece o que estiver designado em "special(css)" sera ativado de forma permanente*/
        
        itemFinalizado.forEach(itemFim => {
            itemFim.addEventListener('click', () => {
                itemFim.classList.add('special');
            })
        })
    })

})

