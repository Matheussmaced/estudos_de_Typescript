// podemos utilizar do poder da herança para nos ajudar a organizar o nosso codigo

// classes podem herdar caracteristicas e metodos de outras classes

interface Car {
  parts: Array<string>
  assembly()
}

class Car implements Car {
  totalSpeedy: number
  speedy: number
  private gears: number

  // metodo constructor podemos parametrizar os valores do carro para cada
  // modelo criado
  constructor(totalSpeedy: number, speedy: number, gears: number){
    this.totalSpeedy = totalSpeedy
    this.speedy = speedy
    this.gears = gears
  }

  acclerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }
}

class Model1A extends Car {
  constructor() {
    super(150,6)  // construtor da classe herdada
  }
}

class Model1B extends Car {
  private sportMode: boolean = false

  constructor(){
    super(150, 6)
  }

  toggleSportMode() {
    this.sportMode = !this.sportMode
    this.totalSpeedy += this.sportMode ? 50 : -50
  }
}

const model1A: Model1A = new Model1A()
const model1B: Model1B = new Model1B()

const cars: Array<Car> = [Model1A, Model1B]

