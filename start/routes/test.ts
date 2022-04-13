import Route from '@ioc:Adonis/Core/Route'

/*
 * Testing out resource controllers
 */
Route.group(() => {
  Route.get('/', 'TestsController.index')
  Route.get('/:id', 'TestsController.show')
  Route.post('/', 'TestsController.store')
}).prefix('/category')
/*
 * Route can be namespaced to follow a directory
 * .apionly to discard web routes
 * shallowResource tags
 */
