const minhaPromisse = () => new Promise((resolve,reject) =>{
   setTimeout(() => { resolve('OK') }, 2000); 
});

/*
minhaPromisse()
    .then(response => {
        console.log(response);
    });*/

// Função assincrona, possuí prefixo async
// Ex 1 normal
/*async function executaPromisse() {
    console.log(await minhaPromisse());    
    console.log(await minhaPromisse());    
    console.log(await minhaPromisse());    
}*/
// Ex 2 - com arrow funcion
const executaPromisse = async() => {
    console.log(await minhaPromisse());    
    console.log(await minhaPromisse());    
    console.log(await minhaPromisse());    
}

executaPromisse();