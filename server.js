var Hapi = require('hapi')
var Good = require('good')
var Path = require('path')
var Nunjucks = require('nunjucks')
var NunjucksHapi = require('nunjucks-hapi')

var server = new Hapi.Server()
server.connection({ port: 3000 })


// Nunjucks templating
var viewPath = Path.join(__dirname, 'templates')
var env = NunjucksHapi.configure(viewPath)

server.views({
  engines: {
    html: NunjucksHapi
  },
  path: viewPath
})


// Internationalization
// FIXME: this is not actually loading existing .po files
server.register({
  register: require('hapi-i18n'),
  options: {
    locales: ["de", "en_US", "fr_FR"],
    defaultLocale: 'en_US',
    directory: './locales'
  }
},
  function (err) {
    if (err) {
      console.log(err);
    }
});


// Routes
// HTML
server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    timestamp = new Date().getTime()
    reply.view('index', {
      'config': {
        'version': '0',
        'timestamp': timestamp
      },
      'title': 'River'
    });
  }
});

// JS App
server.route({
  method: 'GET',
  path: '/app/{param*}',
  handler: {
      directory: {
          path: 'app/'
      }
  }
});

// Static Assets
server.route({
  method: 'GET',
  path: '/css/{param*}',
  handler: {
      directory: {
          path: 'css/'
      }
  }
});

server.route({
  method: 'GET',
  path: '/img/{param*}',
  handler: {
      directory: {
          path: 'img/'
      }
  }
});

server.route({
  method: 'GET',
  path: '/lib/{param*}',
  handler: {
      directory: {
          path: 'lib/'
      }
  }
});

server.route({
  method: 'GET',
  path: '/webfonts/{param*}',
  handler: {
      directory: {
          path: 'webfonts/'
      }
  }
});



// Good logging
server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            args:[{ log: '*', response: '*' }]
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    // Start
    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});