const fs = require("fs");
const pdf = require("pdf-extraction"); 
let dataBuffer = fs.readFileSync("./b.pdf");
let pdfText = 'Aguardando promessa!'

pdf(dataBuffer).then(function (data) {
    console.log('---- Carregado')
    console.log(`Numero de Paginas: ${data.numpages}`)
    console.log(`Versão do PDF: ${data.version}`)
    pdfText = data.text
    let fileName = './sumario.txt'
    let sumario = pdfText.slice(1367,3146)
    console.log('---- Recortado')
    fs.writeFile(fileName, sumario, ()=> {
        console.log(`O arquivo foi salvo em ${fileName}`)
    })
})
console.log(pdfText)


