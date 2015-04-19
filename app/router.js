"use strict";

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

Backbone.$ = $;


// App Requires
var TagModels     = require('./models/tags');
var TagsView      = require('./views/tags');
var SearchModels  = require('./models/search');
var SearchView    = require('./views/search');


// Models
var tagsCollection = new TagModels.Tags();
var searchCollection = new SearchModels.SearchResult();

// Views
var sidebarView = new TagsView({ collection: tagsCollection, el: $('#sidebar-priority') });

module.exports = Backbone.Router.extend({
  routes: {
    ""              : "home",
    "in/:tag"       : "in",
    "tags"          : "tags",
    "tags/:id"      : "tagsView",
    "contacts"      : "contacts",
    "contacts/:id"  : "contactsView"
  },
  home: function() {
    console.log("route: home");
    var searchView = new SearchView({ collection: searchCollection, el: $('#pile-results') });
  },
  in: function(tag) {
    console.log("route: tag/:tag");
    searchCollection.url = 'http://localhost:33411/api/0/search/?q=in:' + tag + '&order=rev-date&start=1&end=200';
    var searchView = new SearchView({ collection: searchCollection, el: $('#pile-results') });

  },
  tags: function() {
    console.log("route: tags");
    tagsCollection.fetch({
      success: function(data) {
        console.log(data);
        //UI.showPage(new TagsListView({model: data}).$el);
      }
    });

  },
  tagsView: function(id) {
    console.log("route: tags/" + id);
    var tag = tagsCollection.get({id: id});
    console.log(tag);
  },
  contacts: function() {
    console.log("route: contacts");
  },
  contactsView: function(id) {
    console.log("route: contact/" + id);
  }
});
