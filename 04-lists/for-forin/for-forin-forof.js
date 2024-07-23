const service = require('./service');

async function main() {
    try {
        const result = await service.getPeoples('a');
        const names = [];
        
        // FOR  
        console.time('for');
        for (let i = 0; i <= result.results.length - 1; i++) {
        const people = result.results[i];
        names.push(people.name);
        }
        console.timeEnd('for');
    
        // FOR IN
        console.time('forin');
        for (let i in result.results) {
        const people = result.results[i];
        names.push(people.name);
        }
        console.timeEnd('forin');
        
        // FOR OF
        console.time('forof');
        for (people of result.results) {
        names.push(people.name);
        }
        console.timeEnd('forof');
    
        console.log('names', names);
    } catch (error) {
        console.error('Erro interno.', error);
    }
}

main();