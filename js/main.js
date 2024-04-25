$(document).ready(function(){
    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules:{
            nome:{required: true},
            email:{required: true,
                    email: true},
            telefone:{required: true},
            cpf:{required: true},
            cep:{required: true},
            end:{required: true},
            bairro:{required: true},
            cidade:{required: true},

        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos=validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existe ${camposIncorretos} campos incorretos`)
            }
        }
    })

})