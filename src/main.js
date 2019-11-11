class App {
    constructor ()
    {
        this.repositorios = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    
    registerHandlers()
    {
        this.formEl.onsubmit = event => this.addRepositorio(event);
    }

    addRepositorio()
    {
        event.preventDefault();

        this.repositorios.push({
            name: 'ComparaHash',
            description: 'App para comparação de hashs',
            avatar_url: 'https://avatars0.githubusercontent.com/u/29067486?s=460&v=4',
            html_url: 'https://github.com/mauriciobenigno/comparaHash'
        });

        this.render();
    }

    render()
    {
        this.listEl.innerHTML = '';

        this.repositorios.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            titleEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    }
}


new App();