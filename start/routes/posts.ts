import Route from '@ioc:Adonis/Core/Route'

/*
 * groups can be nested each other, like, prefix api, inside group, prefix /v1
 * we can also have api/v1 directory and separate and import from there
 */
Route.group(() => {
  /*
   * ctx defines context, or HttpContext of the application
   */
  Route.get('/project/:id', async (ctx) => {
    return `project with param ${ctx.params.id}`
  })
  /*
   * with es6, pulling out the object
   */
  Route.get('/post/:id', async ({ params }) => {
    return `post with param ${params.id}`
  }).where('id', Route.matchers.number()) // numeric regx validator /^[0-9]+$/
  /*
   * optional route topic
   */
  Route.get('/post/topics/:topic?', async ({ params }) => {
    return params.topic ? `topic with param ${params.topic}` : 'optional route of topics'
  }).where('topic', /^[a-zA-Z0-9_-]*$/)
  /*
   * route matcher casts with type
   */
  Route.get('/author/:id', async ({ params }) => {
    return `author with id ${params.id} and type of ${typeof params.id}`
  })
  /*
   * wildcard route with initials matching the string pattern
   */
  Route.get('/img/:id/*', async ({ params }) => {
    return `img with dynamic id ${params.id} and wildcard route. => 1 ${JSON.stringify(params)}`
  })
}).prefix('/api/v1')
