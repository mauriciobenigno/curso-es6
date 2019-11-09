"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// REST

/* Serve para pegar o resto dos dados*/
// para usar o resto basta colocar ...VARIAVEL
// Exemplo 1
var usuario = {
  nome: 'Mauricio',
  idade: 24,
  empresa: 'BenignoDev'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); //console.log(nome);
//console.log(resto);
// Exemplo 2


var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
/*console.log(a);
console.log(b);
console.log(c);*/
// Exemplo 3

function soma() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  return parametros.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 2, 4));
