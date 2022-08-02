const sacolao = [];

const objeto1 = {nome: "laranja",
preco: 5.50,
disponibilidade: true}

const objeto2 = {nome: "acerola",
preco: 2.30,
disponibilidade: true}

const objeto3 = {nome: "uva",
preco: 6.50,
disponibilidade: false}

const sacolao2 = sacolao

console.log(sacolao2)
sacolao.push(objeto1, objeto2, objeto3)
console.log(sacolao)