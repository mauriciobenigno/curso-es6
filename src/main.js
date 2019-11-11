import axios from 'axios';

const getUserFromGithub = (user) => new Promise((resolve,reject) =>{
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    })
 });

 const iniciaBusca = async(user) => {
    console.log(await getUserFromGithub('mauriciobenigno'));    ;    
}

iniciaBusca();