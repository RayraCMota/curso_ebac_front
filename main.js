const form = document.getElementById("form-numerico");


form.addEventListener("submit", function(e){
    e.preventDefault();

    const num01 = document.getElementById("num1");
    const num02 = document.getElementById("num2");
    const n1 = Number(num01.value);
    const n2 = Number(num02.value);
   
    if (n1 >= n2){
        alert ("Por favor, o maior numero fica na segunda caixa.")
    } else {
        alert ("Parabens! Seu formulario foi preenchido corretamente.")
    }

    
});


console.log(form);






/*form.addEventListener("submit", function(e){
    e.preventDefault();
    
});

function validarCampo(){
    const num01 = document.getElementById("num1");
    const num02 = document.getElementById("num2");
    const n1 = Number(num01.value);
    const n2 = Number(num02.value);
    if (n1 > n2){
        document.querySelector('.error-message').style.display = 'block';
        alert = "Por favor, o maior numero fica na segunda caixa."
    } else {
        document.querySelector('.success-message').style.display = 'block';
        alert = "Parabens! Seu formulario foi preenchido corretamente."
    }
}
 */