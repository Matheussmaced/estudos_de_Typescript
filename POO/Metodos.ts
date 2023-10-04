// metodos são as ações ou funções que esse objeto consegue executar

class Dog3 {
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
  
    this.name = name
    this.weight = weight
    this.color = color
    this.breed = breed
    this.size = size
  }

  // definimos a função latir
  bark(): void {
    console.log('au-au')
  }

  // definimos que quando o cachorro escutar o name dele, ele executará
  // a função de latir

  // noise seria o nome do cachorro
  hear(noise:string): void {
    if (noise === this.name) {
      this.bark()
    }
  }

  // vai calcular o preço da tosa em relação ao tamanho e peso
  calculateHairCut(): number {
    return (this.size * this.weight) / 100
  }

}

const Bau: Dog3 = new Dog3('Bau', 15, 'preto', 'vira lata', 20)
