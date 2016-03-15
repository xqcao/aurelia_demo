export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = "Mean_App";
    config.map([{
      route: ['', 'welcome'],
      moduleId: 'welcome',
      name: 'welcome',
      nav: 'true',
      title: 'Wemcome'
    }, {
      route: 'about',
      moduleId: 'about',
      name: 'about',
      title: 'About',
      nav: 'true'
    }, {
      route: 'mygithub',
      name: 'mygithub',
      moduleId: 'mygithub',
      nav: true,
      title: 'One Github'
    }, {
      route: 'gg',
      moduleId: 'gg',
      name: 'gg',
      title: 'GGGG',
      nav: 'true'
    }]);
  }
}
