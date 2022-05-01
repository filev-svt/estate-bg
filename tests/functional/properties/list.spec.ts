import Database from '@ioc:Adonis/Lucid/Database'
import { test } from '@japa/runner'
import { PropertyFactory } from 'Database/factories'

test.group('Properties list', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('get an empty list of paginated properties', async ({ assert, client }) => {
    const response = await client.get('/properties')

    response.assertStatus(200)
    assert.isTrue(response.hasBody())
    assert.equal(response.body().meta.total, 0)
    assert.equal(response.body().meta.per_page, 20)
    assert.equal(response.body().meta.last_page, 1)
  })

  test('get a list of paginated properties', async ({ assert, client }) => {
    await PropertyFactory.create()
    const response = await client.get('/properties')

    response.assertStatus(200)
    assert.isTrue(response.hasBody())
    assert.equal(response.body().meta.total, 1)
    assert.equal(response.body().meta.per_page, 20)
    assert.equal(response.body().meta.last_page, 1)
  })

  test('get a list of many paginated properties', async ({ assert, client }) => {
    await PropertyFactory.createMany(50)
    const response = await client.get('/properties')

    response.assertStatus(200)
    assert.isTrue(response.hasBody())
    assert.equal(response.body().meta.total, 50)
    assert.equal(response.body().meta.per_page, 20)
    assert.equal(response.body().meta.last_page, 3)
  })
})
