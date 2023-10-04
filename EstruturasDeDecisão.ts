// São usados para tomar decisões no fluxo do codigo

// if/else
// switch
// if tenário ? :

const age = 17

if (age >= 18) {
  alert('Usuario maior de idade')
} else {
  alert('Pedido negado')
}

// podemos resolver a complexidade (quantidade de if else) com design patterns

// SWITCH
// quando não temos operações condicionais complexas, com muitos operadores logicos
//talves o switch seja uma boa escolha

// quando se varia entre muitos valores diferentes, o switch pode se encaixar
const option = 3

switch(option) {
  case 1:
    console.log('fazer algo equilavente quando o usuario digitar 1')
    break
  case 2:
    console.log('fazer algo equilavente quando o usuario digitar 2')
    break
  case 3:
    console.log('fazer algo equilavente quando o usuario digitar 3')
    break
  case 4:
    console.log('fazer algo equilavente quando o usuario digitar 4')
    break
}



