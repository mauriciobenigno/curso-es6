import axios from 'axios';

const delay = (segundo) => new Promise((resolve,reject) =>{
    setTimeout(() => { resolve(segundo) }, 1000); 
 });



const umPorSegundo = async() => {
    console.log(await delay('1s'));    
    console.log(await delay('2s'));    
    console.log(await delay('3s'));    
}

umPorSegundo();
