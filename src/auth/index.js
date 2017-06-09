
export class authIndex {

  configureRouter(config, router) {
    config.title = 'Login/Register';
    config.map([
      { route: ['', 'login'], moduleId: 'auth/login', name: 'login',  title: 'Sign in'},
      { route: 'register', moduleId: 'auth/register', name: 'register', title: 'Sign up'}
    ]);

    this.router = router;
  }
}
