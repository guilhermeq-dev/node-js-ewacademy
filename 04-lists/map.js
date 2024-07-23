const srv = require("./service");

async function main() {
  try {
    const results = await srv.getPeoples("a");
    const names = [];

    // FOR EACH
    results.results.forEach((el) => {
      names.push(el.name);
    });

    // MAP
    const mapNames = results.results.map((el) => el.name);

    console.log("names1:", names);
    console.log("names2:", mapNames);
  } catch (error) {
    console.error("Erro interno.", error);
  }
}

main();
