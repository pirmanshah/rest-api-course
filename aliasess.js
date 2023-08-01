const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@root': __dirname + '/src',
  '@utils': __dirname + '/src/utils',
  '@config': __dirname + '/src/config',
  '@routers': __dirname + '/src/routers',
  '@services': __dirname + '/src/services',
  '@controllers': __dirname + '/src/controllers',
  '@middlewares': __dirname + '/src/middlewares',
});

moduleAlias();
