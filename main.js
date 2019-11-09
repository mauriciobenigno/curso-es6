
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor()
    {
        super();

        this.usuario = 'Mauricio';
    }

    mostraUsuario()
    {
        console.log(this.usuario);
    }

}

var MinhaList = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaList.add('Novo Todo');
}

MinhaList.mostraUsuario();