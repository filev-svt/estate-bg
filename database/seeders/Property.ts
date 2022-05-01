import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PropertyFactory } from 'Database/factories'

export default class PropertySeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    // Write your database queries inside the run method
    await PropertyFactory.createMany(20)
  }
}
