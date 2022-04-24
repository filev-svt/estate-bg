import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Property from 'App/Models/Property'
import CreatePropertyValidator from 'App/Validators/CreatePropertyValidator'

export default class PropertiesController {
  public async index(ctx: HttpContextContract) {
    return Property.all()
  }

  public async create(ctx: HttpContextContract) {
    await ctx.request.validate(CreatePropertyValidator)
  }
}
