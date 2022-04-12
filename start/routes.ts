/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
// ctx defines context, or HttpContext of the application
Route.get('/project/:id', async (ctx) => {
  return `project with param ${ctx.params.id}`
})
// with es6, pulling out the object
Route.get('/post/:id', async ({ params }) => {
  return `post with param ${params.id}`
})
