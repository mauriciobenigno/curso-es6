import axios from 'axios';


class Github {
    static async getRepositories(repo) 
    {
        try {
            const response  = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

const iniciaBusca = async() => {
    console.log(await Github.getRepositories('mauriciobenigno/BasicoJSRocketSeatMod4')); 
    console.log(await Github.getRepositories('rocketseat/dslkvmskv')); 

}
   
iniciaBusca();