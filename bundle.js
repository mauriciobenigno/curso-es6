"use strict";

var usuario = {
  nome: 'Mauricio',
  idade: 24,
  endereco: {
    cidade: 'Goiania',
    estado: 'GO'
  }
}; //console.log(usuario);

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;*/
// Com o conceito de desestruturação posso recuperar varias informação de uma vez, exemplo abaixo:

/*
const {nome, idade, endereco:{cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);*/

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
/*Assim como foi feito com as variaveis nome, idade e cidade na linha 17, também é possivel fazer como
parâmetro de função, como foi feito na linha 22*/
