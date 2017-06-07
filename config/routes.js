module.exports.routes = {

  /*************************************************************
  * JSON API
  *
  *************************************************************/
  'PUT /login': 'UserController.login',
  'GET /logout': 'UserController.logout',

  /*************************************************************
   * Server-rendered HTML Pages                                *
   *************************************************************/

  'GET /': 'PageController.showHomePage',
  'GET /videos': 'PageController.showVideosPage',
  'GET /administration': 'PageController.showAdminPage',
  'GET /profile': 'PageController.showProfilePage',
  'GET /edit-profile': 'PageController.showEditProfilePage',

  'GET /signup': {
    view: 'signup',
    locals: {
      me: {
        id: null,
        gravatarURL: 'http://www.gravatar.com/avatar/ef3eac6c71fdf24b13db12d8ff8d1264?',
        email: 'sailsinaction@gmail.com'
      }
    }
  },
  'GET /restore-profile': 'PageController.showRestorePage',
  'GET /administration': {
    view: 'adminUsers',
    locals: {
      me: {
        id: 1,
        gravatarURL: 'http://www.gravatar.com/avatar/ef3eac6c71fdf24b13db12d8ff8d1264?',
        email: 'sailsinaction@gmail.com',
      }
    }
  }
};
