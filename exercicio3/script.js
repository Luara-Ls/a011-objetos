const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {...pokemon1,
nome: "Squirtle",
tipo: "Água"}


pokemon1.ataques = [
{nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100}
]

pokemon2.ataques = {...pokemon1.ataques};

pokemon1.ataques.push({
nome: "Folha Navalha",
dano: 45,
precisao: 100
})

pokemon2.ataque = {nome: "Jato de água",
dano: 40,
precisao: 100,
tipo: "água"

}

console.log(pokemon1)
console.log(pokemon2)