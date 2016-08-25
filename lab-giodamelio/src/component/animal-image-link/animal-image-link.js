/* eslint global-require: "off" */
module.exports = function(app) {
  app.directive('animalImageLink', () => ({
    template: require('./animal-image-link.html'),
    controller() {
      this.test = 'HAHA';
    },
    controllerAs: 'ac',
    bindToController: true,
    scope: {
      title: '@',
      contents: '@',
    },
  }));
};