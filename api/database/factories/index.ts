import Factory from '@ioc:Adonis/Lucid/Factory'
import Property from 'App/Models/Property'

export const PropertyFactory = Factory.define(Property, ({ faker }) => {
  const carpetArea = faker.datatype.number({ min: 20, max: 150 })
  const price = faker.datatype.number({ min: 5000, max: 25000 })

  return {
    price: price,
    fees: faker.datatype.number({ min: 1000, max: 4000 }),
    commission: price * faker.datatype.number({ min: 0, max: 1 }),
    deposit: price * faker.datatype.number({ min: 1, max: 3 }),
    carpetArea: carpetArea,
    builtUpArea: carpetArea + faker.datatype.number({ min: 0, max: 15 }),
    floor: faker.datatype.number({ min: 1, max: 10 }),
    city: faker.address.city(),
    street: faker.address.streetAddress(),
    houseNumber: faker.address.buildingNumber(),
    description: faker.lorem.paragraph(),
    hasParking: faker.datatype.boolean(),
    hasGarage: faker.datatype.boolean(),
    hasElevator: faker.datatype.boolean(),
    hasFurniture: faker.datatype.boolean(),
    freeAt: null,
  }
}).build()
