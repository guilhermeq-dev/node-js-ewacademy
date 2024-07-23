const axios = require("axios");

const URL = "https://swapi.dev/api/people"; // URL da API

async function getPeoples(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  getPeoples,
};

// getPeoples("r2")
//     .then((result) => {
//         console.log("result", result);
//     })
//     .catch((error) => {
//         console.error("DEU RUIM", error);
//     });
