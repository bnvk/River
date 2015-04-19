'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var schemas = require('../schemas');


var Item = Backbone.Model.extend({
  idAttribute: 'mid',
  defaults: {
    mid: '0',
    thread_mid: '',
    from: {
      aid: '',
      address: '',
      flags: {},
      fn: ''
    },
    to_aids: [],
    subject: '',
    body: {
      snippet: ''
    },
    cc_aids: [],
    crypto: {
      encryption: 'none',
      signature: 'none'
    },
    flags: {},
    msg_kb: 0,
    tag_tids: [],
    timestamp: 0,
    urls: {
      source: '',
      thread: ''
    }
  },
  initialize: function() {
    //console.log('initializing Items model ' + this.attributes.mid);
  }
});



var Search = Backbone.Collection.extend({
  model: Item,
  url: config.api + schemas[config.schema].url_search,
  search_tag_ids: [],
  parse: function(response) {

    // Add to collection data
    this.search_tag_ids = response.result.search_tag_ids;

    // Metadata Items
    var values = _.values(response.result.data.metadata);
    return values.reverse();
  }
});


/*** Exported Models ***/

module.exports = {
    SearchItem: Item,
    SearchResult: Search
};
