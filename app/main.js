var $         = require('jquery');
var _         = require('underscore');
var Backbone  = require('backbone');
Backbone.$ = $;


var proxiedSync = Backbone.sync;
Backbone.sync = function(method, model, options) {
  options || (options = {});
  if (!options.crossDomain) {
    options.crossDomain = true;
  }
  if (!options.xhrFields) {
    options.xhrFields = {withCredentials:true};
  }
  return proxiedSync(method, model, options);
};


// Router
var Router = require('./router');
var appRouter = new Router();


// Ready
$(function() {});

console.log('time to Backbone.history.start');
Backbone.history.start();
