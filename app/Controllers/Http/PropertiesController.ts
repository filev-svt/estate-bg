import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Property from 'App/Models/Property'

export default class PropertiesController {
  public async index(ctx: HttpContextContract) {
    return Property.all()
  }
}
