const myName : string = 'Matheus'

// tipos de declarações

// string
// number
// boolean
// array
// enum
// tuple
// unknown
// any
// void

// para array :
const value: Array<string> = ['felipe', 'matheus', 'fernando']

// function :
//                                            tipo de saida apos executar a function
function nomeDaFuncao(parametro1: string, parametro2: string):string{
  return parametro1 + parametro2
}

// enum
// quando temos uma variavel que pode assumir valores
// especificos e de quantidade finita
// mesma finalidade da interface

enum test {
  number1 = 1,
  number2 = 2,
}

const testing: test = 2
// pode só ser atribuido 1 ou 2

// tuple
// quando trabalhamos com listas de tamanhos definidos onde os elementos
// da mesma podem variar entre varios tipos, podemos utilizar o tuple

const value2: [string, number] = ['felipe', 25]
// passo os valores como um objeto tipando o objeto
// lembrando que tem que ser na sequencia correta

// pode se utilizar em uma função que retorna mais de um valor
const getUserNameAndAge = (user: object): [string, name] => {
  // definição da função
}



