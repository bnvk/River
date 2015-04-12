'use strict';

var Backbone = require('backbone');
var $ = require('jquery');


var Address = Backbone.Model.extend({
  defaults: {}
});

var Addresses = Backbone.Collection.extend({
  model: Address
});
