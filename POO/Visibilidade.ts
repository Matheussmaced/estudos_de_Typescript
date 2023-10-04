// ao definir uma classe com propriedades e métodos, muitas vezes não precisamos
// expor toda a informação que ela está guardando

class dog4 {
  name: string = '';
  private energy: number = 100; // está protegida dentro do objeto, não pode ser alterado fora do scopo

  constructor(){  }
    bark(): void{
      if (this.energy >= 30) {
        console.log('au-au')
        this.energy -= 10
      }
    }
    hear(noise: string): void {}
 
}

// precisamos pensar em quais valores deve ser publicos ou privados

const pop:dog4 = new dog4()
