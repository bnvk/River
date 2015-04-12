'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');


var Message = Backbone.Model.extend({
  idAttribute: 'mid',
  defaults: {
    mid: "",
    attachments: [],
    crypto: {},
    header_list: [],
    html_parts: [],
    text_parts: []
  },
  initialize: function() {
    console.log('initializing Message model ' + this.attributes.id);
  }
});


var Thread = Backbone.Collection.extend({
  model: Message,
  url: 'http://localhost:33411/api/0/message/?arg=',
  parse: function(response) {
    console.log('parse Messages collection response');
    // Add Message to model
    var values = _.values(response.result.data.messages);
    return values;
  }
});


/*** Exported Models ***/

module.exports = {
    Message: Message,
    Thread: Thread
};
