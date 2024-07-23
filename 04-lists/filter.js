const { getPeoples } = require("./service");

Array.prototype.myFilter = function (callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    // 0, "", null, undefined, NaN = false
    if (!result) continue;
    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { results } = await getPeoples("a");

    const familyLars = results.myFilter((people) => {
      // por default precisa retornar um booleano para informar se deve manter ou remover da lista
      // false > remove da lista
      // true > mantém
      // não encontrou = -1
      // encontrou = posicaoNoArray
      const result = people.name.toLowerCase().indexOf("lars") !== -1;
      return result;
    });

    const names = familyLars.map((people) => people.name);

    console.log(names);
  } catch (error) {
    console.error("Erro interno.", error);
  }
}

main();
