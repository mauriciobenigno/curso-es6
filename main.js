
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

//MinhaList.mostraUsuario();

function teste(x)
{
    let y = 2;

    if( x > 5)
    {
        let y = 4;
        console.log(x, y);
    }
}

//teste(10);
// OPERAÇÕES COM ARRAY

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item){
    return item*2;
});

//console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total+ next;
});

//console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 == 0;
});

//console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

//console.log(find);
