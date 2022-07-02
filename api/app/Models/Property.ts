import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Property extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price: number

  @column()
  public fees: number | null

  @column()
  public commission: number | null

  @column()
  public deposit: number | null

  @column()
  public carpetArea: number

  @column()
  public builtUpArea: number

  @column()
  public floor: number | null

  @column()
  public city: string

  @column()
  public street: string

  @column()
  public houseNumber: string | null

  @column()
  public postalCode: string | null

  @column()
  public latitude: string | null

  @column()
  public longitude: string | null

  @column()
  public description: string

  @column()
  public hasParking: boolean

  @column()
  public hasGarage: boolean

  @column()
  public hasElevator: boolean

  @column()
  public hasFurniture: boolean

  @column.date()
  public freeAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
