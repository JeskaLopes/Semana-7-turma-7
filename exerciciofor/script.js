window.addEventListener('DOMContentLoaded', function() {

let numero1 = document.querySelector('#numero1');
let numero2 = document.querySelector('#numero2');

for (let a = 0; a <= 10; a++){
    numero1.innerHTML=numero1.innerHTML + a + '<br>'; 
    console.log('fun')
    //console.log(a)
    // Vai executar 9 vezes
    
}
for (let b = 10; b >=0; b--){
    numero2.innerHTML=numero2.innerHTML + b + '<br>';
    console.log('cionou')
    //console.log(-b)
    //o inverso da expressao de cima
}
});



/*
for(let a=0, b=12345679 ; a<=81 ; a+=9 ){
    document.write(a *b +  '<br>');
    console.log(a*b)
    //numero2.innerHTML=numero2.innerHTML + b + '<br>';
}
});

for (let a = 0; a <= 10; a++){
    numero1.innerHTML=numero1.innerHTML + a + '<br>'; 
    console.log('fun')
    //console.log(a)
    // Vai executar 9 vezes
    
}
for (let b = 10; b >=0; b--){
    numero2.innerHTML=numero2.innerHTML + b + '<br>';
    console.log('cionou')
    //console.log(-b)
    //o inverso da expressao de cima
}
*/
//&& let b = 10; b < 9; b--