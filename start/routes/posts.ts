import Route from '@ioc:Adonis/Core/Route'

// ctx defines context, or HttpContext of the application
Route.get('/project/:id', async (ctx) => {
  return `project with param ${ctx.params.id}`
})

// with es6, pulling out the object
Route.get('/post/:id', async ({ params }) => {
  return `post with param ${params.id}`
}).where('id', Route.matchers.number()) // numeric regx validator /^[0-9]+$/

// optional route topic
Route.get('/post/topics/:topic?', async ({ params }) => {
  return params.topic ? `topic with param ${params.topic}` : 'optional route of topics'
}).where('topic', /^[a-zA-Z0-9_-]*$/) // Route.matchers.slug()

// route matcher casts with type
Route.get('/author/:id', async ({ params }) => {
  return `author with id ${params.id} and type of ${typeof params.id}`
})

// route matcher casts with type
Route.get('/img/:id/*', async ({ params }) => {
  return `img with dynamic id ${params.id} and wildcard route. => 1 ${JSON.stringify(params)}`
})
