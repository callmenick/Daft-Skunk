////////////////////////////////////////////////
// ControlsView.js
////////////////////////////////////////////////

var app = app || {};

app.ControlsView = Backbone.View.extend({

  tagName: 'div',

  className: 'tracks-controls',

  template: Handlebars.compile($('#track-controls-template').html()),

  events: {
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});