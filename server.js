var fs = require('fs');
var Hapi = require('hapi')
var Good = require('good')
var Path = require('path')
var Nunjucks = require('nunjucks')
var NunjucksHapi = require('nunjucks-hapi')
var argv = require('argv')


// Args
argv.option({
  name: 'api',
  short: 'a',
  type: 'string',
  description: 'Defines URL of API',
  example: "'server.js --api=domain.com/api/0/' or 'server.js -a location:8888/api/testing/"
});

argv.option({
  name: 'schema',
  short: 's',
  type: 'string',
  description: 'Defines Schema of API',
  example: "'server.js --schema=mailpile' or 'server.js -a testing"
});


// Run the imported options.
var args = argv.run();


// Create Server
var server = new Hapi.Server()
server.connection({ port: 8888 })


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


if (args.options.api !== undefined) {
  var api_url = args.options.api;
  var api_schema = args.options.schema;
} else {
  var api_url = 'http://localhost:8888/tests-api/';
  var api_schema = 'testing';
}


var app_values = {
  'config': {
    'api': api_url,
    'schema': api_schema,
    'version': '0',
    'timestamp': timestamp = new Date().getTime(),
    'web': {
      'display_density': 'comfy'
    }
  },
  'title': 'River',
  // Accessed old commands
  'mailpile': function(val1) {
    console.log('mailpile val1 ' + val1);
  },
  'get_ui_elements': function(region, state, url) {
    console.log('get_ui_elements value ' + region);
    console.log('get_ui_elements value ' + state);
    console.log('get_ui_elements value ' + url);
  },
  // Inside of search_item_new
  'show_avatar': function(from) {
    return '/img/avatar-default.png';
  },
  'has_label_tags': function(tags, tag_tids) {
    return false;
  },
  'nice_subject': function(metadata) {
    console.log(metadata);
    return 'Your message subject'
  },
  'elapsed_datetime': function(datetime) {
    return 'just now';
  }
}

// Mailpile Theme File
app_values.theme = JSON.parse(fs.readFileSync('./theme.json', 'utf8'));
console.log('Loaded theme for: ' + app_values.theme.name);


// Routes
// HTML
server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index', app_values);
  }
});

server.route({
  method: 'GET',
  path: '/in/{param*}',
  handler: function(request, reply) {
    reply.view('index', app_values);
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
      path: 'static/css/'
    }
  }
});

server.route({
  method: 'GET',
  path: '/img/{param*}',
  handler: {
    directory: {
      path: 'static/img/'
    }
  }
});

server.route({
  method: 'GET',
  path: '/webfonts/{param*}',
  handler: {
    directory: {
      path: 'static/webfonts/'
    }
  }
});

server.route({
  method: 'GET',
  path: '/tests-api/{param*}',
  handler: {
    directory: {
      path: 'tests/api/'
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
