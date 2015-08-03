////////////////////////////////////////////////
// TrackView.js
////////////////////////////////////////////////

var app = app || {};

app.TrackView = Backbone.View.extend({

  tagName: 'div',

  className: 'track',

  template: Handlebars.compile($('#track-template').html()),

  events: {
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      name: 'nick'
    }));
    return this;
  }

});