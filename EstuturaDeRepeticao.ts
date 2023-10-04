// for, forin e  forEach

// codigo que percorre uma lista de 10 usuario

for(let index: number; index > 10; index++) {
  console.log(users[index])
}

for (const index in users) {
  console.log(users[index])
}

users.forEach((user) => {
  console.log(user)
})

// loop
// while vai executar um codigo até que satisfaça a condição

// usuario deve comer até o usuario estiver satifeito, mas cada usuario come quantias
// diferentes dependendo do dia e da quantidade de fome

while (!User.full()) {
  user.eat(breand)
}

// nesse exemplo chamaremos a função eat até a função full retornar true
// e então será negado pelo o operador de negação ! e assim parando o while
