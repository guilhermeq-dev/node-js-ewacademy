const { getPeoples } = require("./service");

Array.prototype.myReduce = function (callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
    for (let index = 0; index <= this.length - 1; index++) {
        finalValue = callback(finalValue, this[index], this);
    }
    return finalValue;
};

async function main() {
    try {
        const { results } = await getPeoples("a");
        
        const pesos = results.map(item => parseInt(item.height));
        console.log("Pesos:", pesos);

        const total = pesos.reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        console.log("Total:", total);
    } catch (error) {
        console.error("Erro interno.", error);
    }
}

main();