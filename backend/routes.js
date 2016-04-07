var userController = require('./user/userController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  app.get('/', function(req, res) {
      res.render('pages/index');
  });
  app.get('/about', function(req, res) {
      res.render('pages/about');
  });
  app.get('/tutors/:name', userController.findTutor);

  app.post('/api/users/signup', userController.signup);
  app.post('/api/users/signin', userController.signin);

  app.get('*',  function(req, res) {
      res.render('pages/index');
  });

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

