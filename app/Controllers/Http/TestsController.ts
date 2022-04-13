import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {
  public async index({}: HttpContextContract) {
    return 'I am a category meh'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    return 'Category is saved'
  }

  public async show({ params }: HttpContextContract) {
    return `Category with id of ${params.id} and type of ${typeof params.id} `
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
