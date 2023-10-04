// só pode ser male ou famale
enum Gender {
  male,
  famale,
}

// só pode admin ou normalUser
enum Roles {
  Admin,
  NomarlUser,
}


type Users = {
  name: string;
  age: number;
  gender: Gender;
  roles: Array<Roles>
}

// Propriedades opcionais
// só colocar antes dos : o ponto de ?

// Posso também utilizar interface ao inves de type
// Melhor utilizar interface


