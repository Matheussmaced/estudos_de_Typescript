// usaremos o exemplo de um cachorro
// precisamos saber seu nome, peso, cor, raça e tamanho

class Dog {
  name: string = ''
  weight: number = 0
  color: string = ''
  breed: string = ''
  size: number = 0
}

const dog: Dog = new Dog()

// metodo construtor 
// é chamado quando instanciamos um objeto atraves de uma classe
// usando o operador new

class Dog2 {
  name: string = ''
  weight: number = 0
  color: string = ''
  breed: string = ''
  size: number = 0

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number,
  ){
    // this é uma referencia ao objeto que será criado
    this.name = name
    this.weight = weight
    this.color = color
    this.breed = breed
    this.size = size
  }
}

const pop: Dog = new Dog2('pop', 15, 'preto', 'vira lata', 20)