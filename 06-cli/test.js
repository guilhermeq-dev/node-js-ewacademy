const { deepEqual, ok } = require('assert'); //importa as funcoes deepEqual e ok do modulo assert

const database = require('./database'); //importa o modulo database

const DEFAULT_ITEM_REGISTER = { name: 'Flash', power: 'Speed', id: 1 }; //cria um objeto DEFAULT_ITEM_REGISTER 

describe('Suite de manipulação de Herois', () => {
  it("deve cadastrar um heroi usando arquivos", async () => {
    const expected = DEFAULT_ITEM_REGISTER; //cria um objeto expected que recebe o objeto DEFAULT_ITEM_REGISTER
    const [result] = await database.listar(expected.id);
    deepEqual(result, expected); //compara o objeto result com o objeto expected
  });
}); //cria uma suite de testes chamada 'Suite de manipulação de Herois'