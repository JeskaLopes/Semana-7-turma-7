window.addEventListener('DOMContentLoaded', function() {

let senha = '1234'
let password = (prompt('Digite uma senha')) //document.querySelector('#caixa');

if(password != senha){
    do{
    password=(prompt('Senha incorreta, tente novamente'));
    }
    while(password != senha);
    
    if(password == senha){
        alert('Você entrou');
    }
}

else{
    alert('Você entrou no sistema')
}

});