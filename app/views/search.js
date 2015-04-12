'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');


// FIXME: move to required templates once that is figured out
var template = _.template('<tr id="pile-message-<%= mid %>" data-mid="<%= mid %>" class="result data-state="normal"><td class="from"><% if (from.fn) { %><%= from.fn %><% } else { %>(<%=__("No Name")%>)<% } %></td><td class="subject"><a class="item-subject" href="<%= urls.thread %>"><%= subject %></a></td> <td class="date"><a href="/search/dates:<%= timestamp %>/"><%= timestamp %></a></td></tr>');


var ItemView = Backbone.View.extend({
  tagName : "tr",
  className : "item",
  template: template,//_.template($('#template-search-item').html()),
  render : function() {
    var search_item = this.model.attributes;
    this.el = this.template(search_item);
    return this;
  }
});


var UpdatingItemView = ItemView.extend({
  initialize : function(options) {
    this.render = _.bind(this.render, this);
    this.model.bind('change:id', this.render);
  }
});



/*** Exported View ***/

Backbone.$ = $;

module.exports = Backbone.View.extend({
  events: {
    "click a.item-from":    "viewThread",
    "click a.item-subject": "viewThread",
    "click input.item-checkbox": "viewThread"
  },
  initialize : function() {

    var that = this;
    this._searchItemViews = [];

    this.collection.fetch().done(function() {

      that.collection.each(function(Item) {
        that._searchItemViews.push(new UpdatingItemView({
          model : Item,
          tagName : 'tr'
        }));
      });

      that.render();

    });
  },
  render : function() {
    var that = this;

    // Clear out view
    $(this.el).empty();

    // Render each sub-view and append to the parent view's element.
    _(this._searchItemViews).each(function(itemView) {
      $(that.el).append(itemView.render().el);
    });
  },
  viewThread: function(e) {
    e.preventDefault();
    var mid = $(e.currentTarget).parent().parent().data('mid');
    alert('Yo dawg view message: ' + mid);
  }

});
