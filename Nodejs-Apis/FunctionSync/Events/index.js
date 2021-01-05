const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, (click) => {
    console.log('Usuário clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// let count = 0
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no ok ' + count++)
    
// }, 2000);
const stdin = process.openStdin()
stdin.addListener('data', (value) => {
    console.log(`Você Digitou: ${value.toString().trim()}`)
})