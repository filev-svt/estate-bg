import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Property from 'App/Models/Property'
import CreatePropertyValidator from 'App/Validators/CreatePropertyValidator'

export default class PropertiesController {
  public async list() {
    return Database.from('properties').paginate(1)
  }

  public async create(ctx: HttpContextContract) {
    try {
      ctx.response.send(Property.create(await ctx.request.validate(CreatePropertyValidator)))
    } catch (e) {
      ctx.response.badRequest(e.messages)
    }
  }

  public async show(ctx: HttpContextContract) {
    try {
      return Property.findOrFail(ctx.request.param('id'))
    } catch (e) {
      return { message: e.message }
    }
  }
}
