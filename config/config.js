var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'landing'
    },
    port: 3000,
    db: 'mongodb://localhost/landing-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'landing'
    },
    port: 3000,
    db: 'mongodb://localhost/landing-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'landing'
    },
    port: 3000,
    db: 'mongodb://localhost/landing-production'
  }
};

module.exports = config[env];
