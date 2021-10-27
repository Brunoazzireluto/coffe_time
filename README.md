# Coffe time teste Renato 1

Verificar retirar ip via JS e via Python

# usando Lodash
let items = [
  {
    id: 1,
    categorie: "alguma categoria",
    name: "Algum nome",
    description: "alguma descrição",
    price: 2.5
  },
  {
    id: 2,
    categorie: "alguma categoria",
    name: "Algum nome",
    description: "alguma descrição",
    price: 20.5
  },
  {
    id: 3,
    categorie: "alguma categoria",
    name: "Algum nome",
    description: "alguma descrição",
    price: 5.89
  },
  {
    id: 4,
    categorie: "alguma categoria",
    name: "Algum nome",
    description: "alguma descrição",
    price: 5.9
  }
];

var a = _.chunk(items, 2);
console.log(a)
for (let x in a) {
  for (let i in a[x]){
    console.log(a[x][i])
  }
}

https://stackoverflow.com/questions/44309300/iterating-over-json-in-react