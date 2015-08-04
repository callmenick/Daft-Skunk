////////////////////////////////////////////////
// ChannelView.js
////////////////////////////////////////////////

var app = app || {};

app.ChannelView = Backbone.View.extend({

  tagName: 'div',

  className: 'channel',

  template: Handlebars.compile($('#channel-template').html()),

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