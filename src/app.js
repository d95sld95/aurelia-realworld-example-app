export class App {

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: 'home/home', name: 'home',  title: 'Home'},
      { route: 'editor/:slug', moduleId: 'editor/editor', name: 'editor', title: 'Editor', settings: { authenticated: true } },
      { route: 'auth', moduleId: 'auth/index', name: 'auth'}
    ]);

    this.router = router;
  }
}
