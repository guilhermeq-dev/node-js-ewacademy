const { deepEqual, ok } = require('assert'); //importa as funcoes deepEqual e ok do modulo assert

const database = require('./database'); //importa o modulo database

const DEFAULT_ITEM_REGISTER = { name: 'Flash', power: 'Speed', id: 1 }; //cria um objeto DEFAULT_ITEM_REGISTER 

describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_REGISTER);
  });

  it("deve pesquisar um heroi usando arquivos", async () => {
    const expected = DEFAULT_ITEM_REGISTER; //cria um objeto expected que recebe o objeto DEFAULT_ITEM_REGISTER
    const [result] = await database.listar(expected.id);
    deepEqual(result, expected); //compara o objeto result com o objeto expected
  });

  it(`Deve cadastrar um heroi usando arquivos`, async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const result = await database.cadastrar(DEFAULT_ITEM_REGISTER);
    console.log('result', result);
    const [actual] = await database.listar(DEFAULT_ITEM_REGISTER.id);
    deepEqual(actual, expected);
  });
  it('Deve remover um heroi por id', async () => {
    const expected = true;
    const result = await database.remover(DEFAULT_ITEM_REGISTER.id);
    deepEqual(result, expected);
  });
  it('Deve atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_REGISTER,
      name: 'Batman',
      power: 'Money'
    };
    const newData = {
      name: 'Batman',
      power: 'Money'
    };
    await database.atualizar(DEFAULT_ITEM_REGISTER.id, newData);
    const [result] = await database.listar(DEFAULT_ITEM_REGISTER.id);
    deepEqual(result, expected);
  });
}); //cria uma suite de testes chamada 'Suite de manipulação de Herois'