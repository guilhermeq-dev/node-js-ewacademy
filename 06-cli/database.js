const { readFile, writeFile } = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(readFile);

class Database {
  constructor() {
    this.NOME_ARQUIVO = './heroes.json';
  };
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString());
  };
  escreverArquivo() {

  };
  async listar(id) {
    const data = await this.obterDadosArquivo();
    const filteredData = data.filter(item => (id ? (item.id === id) : true));
    return filteredData;
  };
};

module.exports = new Database();