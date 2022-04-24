import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePropertyValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    // price: schema.number([rules.unsigned]),
    // fees: schema.number.optional([rules.unsigned]),
    // commission: schema.number.optional([rules.unsigned]),
    // deposit: schema.number.optional([rules.unsigned]),
    // carpetArea: schema.number([rules.unsigned]),
    // builtUpArea: schema.number([rules.unsigned]),
    // floor: schema.number.optional([rules.unsigned]),
    // city: schema.string(),
    // street: schema.string(),
    // houseNumber: schema.string.optional(),
    // postalCode: schema.string.optional([rules.regex(/\d/)]),
    description: schema.string(),
    hasParking: schema.boolean(),
    hasGarage: schema.boolean(),
    hasElevator: schema.boolean(),
    hasFurniture: schema.boolean(),
    freeAt: schema.date.optional(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
