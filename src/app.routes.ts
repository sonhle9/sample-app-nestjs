import { StaticPagesController } from './controllers/static-pages/static_pages.controller'
import { UsersController } from './controllers/users/users.controller'
import { SessionsController } from './controllers/sessions/sessions.controller'
import { RelationshipsController } from './controllers/relationships/relationships.controller'
import { AccountActivationsController } from './controllers/account-activations/account-activations.controller'
import { PasswordResetsController } from './controllers/password-resets/password-resets.controller'
import { MicropostsController } from './controller/microposts/microposts.controller'

const routes = [
    { path: "/", controller: StaticPagesController, method: 'GET', function: 'home' },

    { path: "/sessions", controller: SessionsController, method: 'GET', function: 'index' },
    { path: "/logout", controller: SessionsController, method: 'DELETE', function: 'destroy' },
    { path: "/login", controller: SessionsController, method: 'POST', function: 'create' },

    { path: "/users", controller: UsersController, method: 'GET', function: 'index' },
    { path: "/users/:id", controller: UsersController, method: 'GET', function: 'show' },
    { path: "/users/new", controller: UsersController, method: 'POST', function: 'create' },
    { path: "/users/:id/edit", controller: UsersController, method: 'GET', function: 'edit' },
    { path: "/users/:id", controller: UsersController, method: 'POST', function: 'update' },
    { path: "/users/:id", controller: UsersController, method: 'DELETE', function: 'destroy' },
    { path: "/users/:id/following", controller: UsersController, method: 'GET', function: 'following' },
    { path: "/users/:id/followers", controller: UsersController, method: 'GET', function: 'followers' },
    
    { path: "/account_activations/:id", controller: AccountActivationsController, method: 'POST', function: 'update' },

    { path: "/password_resets", controller: PasswordResetsController, method: 'POST', function: 'create' },
    { path: "/password_resets/:id", controller: PasswordResetsController, method: 'PATCH', function: 'update' },

    { path: "/users/:id/followers", controller: MicropostsController, method: 'POST', function: 'home' },
    { path: "/users/:id/followers", controller: MicropostsController, method: 'DELETE', function: 'home' },

    { path: "/users/:id/followers", controller: RelationshipsController, method: 'POST', function: 'home' },
    { path: "/users/:id/followers", controller: RelationshipsController, method: 'DELETE', function: 'home' },
]

// export const routes: Routes = [
//     { path: '/ninja', controller: NinjaController, children: [ { path: '/cats', controller: CatsController, }, { path: '/dogs', controller: DogsController, }, 
// ],
// }];

export default routes