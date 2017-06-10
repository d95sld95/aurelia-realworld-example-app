export class App {

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: 'home/home', name: 'home',  title: 'Home'},
      { route: 'editor/:slug', moduleId: 'editor/editor', name: 'editor', title: 'Editor', settings: { authenticated: true } },

      { route: 'register', moduleId: 'auth/register', name: 'register', title: 'Sign up'},
      { route: 'login', moduleId: 'auth/login', name: 'login',  title: 'Sign in'}

    ]);

    this.router = router;
  }
}
