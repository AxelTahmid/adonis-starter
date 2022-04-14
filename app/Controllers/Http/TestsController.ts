import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DateService from 'App/Services/DateService'
export default class TestsController {
  public dateService: DateService

  constructor() {
    this.dateService = new DateService('dd/MM/yyyy')
  }

  public async index({}: HttpContextContract) {
    return 'I am a category meh'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    const dateTime = DateService.toDateTime()

    const formattedDate = this.dateService.toDate(dateTime)

    return `storing a category ${formattedDate}`
  }

  public async show({ params }: HttpContextContract) {
    return `Category with id of ${params.id} and type of ${typeof params.id} `
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
