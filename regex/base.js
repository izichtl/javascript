const texto = `João trouxe    flores para sua amada namorada em 10 de janeiro de 1970,
Maria era o nome dela.
Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooãoooooooooooooooooooooooooooo Jão  , o café tá prontinho aqui. Veeemm"!
`;

const alfabeto = 'ABCDEFGHI    abcdefghi 012345679 10 ; '

const html = '<p>bola</p> <a>quadrado</a> <p>bola</p> <a>quadrado2</a> <div>Bola</div>'

const lista = [
    '00.jpg',
    '01.jpeg',
    '02.jpg',
    '03.jpg',
    '03.jpeg',
    '03.png',
    '03.git',
]

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `
Os Ips são:
   0.0.0.0
   192.168.0.25
        10.10.5.12
        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)
   255.255.255.255
`;
module.exports = { texto , lista, html, alfabeto, cpfs, cpfs2, ips};