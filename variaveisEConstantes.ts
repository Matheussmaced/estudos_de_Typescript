function getCustomers () :void {
  console.log('Chamada para uma API')
}

const customers = getCustomers()
Object.freeze(customers) // imutabilidade de objetos (não posso alterar valores dentro dele)

