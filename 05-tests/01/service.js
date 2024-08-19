const {
    get
} = require('axios')

const URL = `https://swapi.co/api/people`

async function getPeoples(name) {
    const url = `${URL}/?search=${name}&format=json`
    const result = await get(url)

    return result.data.results.map(mapPeoples)
}

function mapPeoples(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}
module.exports = {
    getPeoples
}