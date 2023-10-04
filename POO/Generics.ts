// tem a capacidade de melhorar a forma como definimos tipos

const names: Array<string> = ['Maria', 'João']

// multiplos tipos no array
type User = {
  name: string;
  age: number;
}

const users: Array<User> = [
  {name: 'Maria', age: 25},
  {name: 'João', age: 20}
]

// criar generics é garantir que um tipo será composto por outro tipo

interface UserPage {
  list: Array<User>;
  totalPages: number;
  currentPages: number;
  itemsPerPage: number;
  totalItems: number;
}

// para deixar para definir o tipo mais tarde, só colocar UserPage<T>

interface UserPage2<T> {
  list: Array<T>;
  totalPages: number;
  currentPages: number;
  itemsPerPage: number;
  totalItems: number;
}

// E nisso podemos definir do que será a nossa pagina
let usersPage: UserPage2<User> = getUsers({page: 1})

