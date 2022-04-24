import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Properties extends BaseSchema {
  protected tableName = 'properties'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.decimal('price', 19, 4)
      table.decimal('fees', 19, 4).nullable()
      table.decimal('commission', 19, 4).nullable()
      table.decimal('deposit', 19, 4).nullable()
      table.integer('carpet_area')
      table.integer('built_up_area')
      table.integer('floor').nullable()
      table.string('city', 100)
      table.string('street', 100)
      table.string('house_number', 10).nullable()
      table.string('postal_code', 7).nullable()
      table.string('latitude').nullable()
      table.string('longitude').nullable()
      table.text('description')
      table.boolean('has_parking')
      table.boolean('has_garage')
      table.boolean('has_elevator')
      table.boolean('has_furniture')
      table.date('free_at').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
