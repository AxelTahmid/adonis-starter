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
import './routes/posts'
/*
 * global route delcaration that id always numeric and type casted numeric
 * can also be chained with specific routes & global even if declared in module
 */
Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

Route.get('/', async () => {
  return 'Hello World'
})
/*
 * We can have route providers, to load up on boot, and mention it in adonis.json
 * it works through contract - interfacing. should be used for regex list
 */
