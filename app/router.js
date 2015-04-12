"use strict";

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

Backbone.$ = $;

/*
var PageSlider    = require('./utils/pageslider');
var slider        = new PageSlider($('body'));
var homeView      = new HomeView();
*/

// App Requires
var TagModels     = require('./models/tags');
var TagsView      = require('./views/tags');
var SearchModels  = require('./models/search');
var SearchView    = require('./views/search');

// Models
var tagsCollection = new TagModels.Tags();
var searchCollection = new SearchModels.SearchResult();


console.log('after da app requires');

// Views
var sidebarView = new TagsView({ collection: tagsCollection, el: $('#sidebar-priority') });
var searchView = new SearchView({ collection: searchCollection, el: $('#pile-results') });

module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "tags": "tags",
    "tags/:id": "tagsView",
    "contacts": "",
    "contacts/:id": "contactsView"
  },
  home: function() {
    console.log("home");
//  slider.slidePage(homeView.$el);
  },
  tags: function() {
    console.log("route: tags");
/*  employee.fetch({
      success: function (data) {
        slider.slidePage(new EmployeeView({model: data}).$el);
      }
    });
*/
  },
  tagsView: function(id) {
    console.log("route: tags/" + id);
/*  var tag = new models.Employee({id: id});
    employee.fetch({
      success: function (data) {
        slider.slidePage(new EmployeeView({model: data}).$el);
      }
    });
*/
  },
  contacts: function() {
    console.log("route: contacts");
/*  var employee = new models.Employee({id: id});
    employee.fetch({
      success: function (data) {
        slider.slidePage(new ReportsView({model: data}).$el);
      }
    });
*/
  },
  contactsView: function(id) {
    console.log("route: contact/" + id);
/*  var contact = new models.Employee({id: id});
    employee.fetch({
      success: function (data) {
        slider.slidePage(new ReportsView({model: data}).$el);
      }
    });
*/
  }
});
