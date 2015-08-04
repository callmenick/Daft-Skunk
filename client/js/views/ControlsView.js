////////////////////////////////////////////////
// ControlsView.js
////////////////////////////////////////////////

var app = app || {};

app.ControlsView = Backbone.View.extend({

  tagName: 'div',

  className: 'controls',

  template: Handlebars.compile($('#controls-template').html()),

  events: {
    'click .controls__add-channel'    : 'addChannel',
    'click .controls__play'           : 'playSong'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  addChannel: function(e) {
    e.preventDefault();
    app.channelsCollection.addChannel();
  },

  removeChannel: function(e) {
    e.preventDefault();
    app.channelsCollection.removeChannel();
  },

  playSong: function(e) {
    e.preventDefault();
  }

});