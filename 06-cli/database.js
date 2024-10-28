const { readFile, writeFile } = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this.NOME_ARQUIVO = './heroes.json';
  };

  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString());
  };

  async escreverArquivo(data) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(data));
    return true;
  };

  async cadastrar(heroi) {
    const data = await this.obterDadosArquivo();
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiComId = { id, ...heroi };
    const finalData = [...data, heroiComId];
    const resultado = await this.escreverArquivo(finalData);
    return resultado;
  };

  async listar(id) {
    const data = await this.obterDadosArquivo();
    const filteredData = data.filter(item => (id ? (item.id === id) : true));
    return filteredData;
  };

  async remover(id) {
    if (!id) {
      return await this.escreverArquivo([]);
    }
    const data = await this.obterDadosArquivo();
    const index = data.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw Error('O herói informado não existe');
    }
    data.splice(index, 1);
    return await this.escreverArquivo(data);
  };

  async atualizar(id, modificacoes) {
    const data = await this.obterDadosArquivo();
    const index = data.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw Error('O herói informado não existe');
    }
    const atual = data[index];
    const objetoAtualizar = {
      ...atual,
      ...modificacoes
    };
    data.splice(index, 1);
    return await this.escreverArquivo([
      ...data,
      objetoAtualizar
    ]);
  }
};

module.exports = new Database();