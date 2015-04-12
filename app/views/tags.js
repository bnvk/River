'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

//var templates = require('./template.html');
var template = _.template('<li><a href="/in/<%= slug %>/" class="sidebar-tag color-<%= label_color %>" title="<%= name %>" data-tid="<%= tid %>"><span class="icon <%= icon %>" style="color: <%= label_color %>;"></span><span class="name"><%= name %></span></a></li>');


var TagView = Backbone.View.extend({
  tagName : "li",
  className : "tag",
  template: template,
  render : function() {
    var tag = this.model.attributes;

    // FIXME: Only adds tags of certain type to model
    if (tag.display !== 'archive') {
      this.el.innerHTML = this.template(tag);
    }
    return this;
  }
});

var UpdatingTagView = TagView.extend({
  initialize : function(options) {
    this.render = _.bind(this.render, this);
    this.model.bind('change:name', this.render);
  }
});



/*** Exported View ***/

Backbone.$ = $;

module.exports = Backbone.View.extend({
  events: {
    "click a.sidebar-tag": "viewSearch"
  },
  initialize : function() {

    var that = this;
    this._tagViews = [];

    this.collection.fetch().done(function() {

      that.collection.each(function(Tag) {
        that._tagViews.push(new UpdatingTagView({
          model : Tag,
          tagName : 'li'
        }));
      });

      that.render();
    });

  },
  render : function() {
    var that = this;

    // Clear out view
    $(this.el).empty();

    // Render each sub-view & append to the parent view element
    _(this._tagViews).each(function(tagView) {
      $(that.el).append(tagView.render().el);
    });
  },
  viewSearch: function(e) {
    e.preventDefault();
    console.log($(e));
    var tid = $(e.currentTarget).data('tid');
    alert('Sup view search: ' + tid);
  }
});
