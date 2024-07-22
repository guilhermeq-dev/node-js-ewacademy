const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const eventName = "usuario:click";
myEmitter.on(eventName, (click) => {
  console.log("um usuario clicou", click);
});

// myEmitter.emit(eventName, 'na barra de rolagem')
// myEmitter.emit(eventName, 'no ok')

// let count = 0
// setInterval(function () {
//     myEmitter.emit(eventName, 'no ok' + (count++))

// }, 1000)

const stdin = process.openStdin();

function main() {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", function (value) {
      // console.log(`Voce digitou: ${value.toString().trim()}`)
      return resolve(value);
    });
  });
}
main().then((resultado) => {
  console.log("resultado", resultado.toString());
});
