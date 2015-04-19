'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var schemas = require('../schemas');


var Tag = Backbone.Model.extend({
  idAttribute: 'tid',
  defaults: {
    tid: '0',
    name: 'Tag Name',
    slug: 'tag-name',
    icon: 'icon-tag',
    label_color: '#4D4D4D',
    url: '/in/tag-name/',
    tag: 'tag',
    display: 'tag'
  },
  initialize: function () {
    //console.log('initializing Tag model ' + this.attributes.tid);
  }
});

var Tags = Backbone.Collection.extend({
  model: Tag,
  url: config.api + schemas[config.schema].url_tags,
  parse: function(response) {
    return response.result.tags;
  }
});


/*** Exported Models ***/

module.exports = {
    Tag: Tag,
    Tags: Tags
};
