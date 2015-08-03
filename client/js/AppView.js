////////////////////////////////////////////////
// AppView.js
////////////////////////////////////////////////

var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#app',

  events: {
  },

  initialize: function() {
    this.tracks = new app.TracksView();
    this.controls = new app.ControlsView();
    
    this.render();
  },

  render: function() {
    this.$el.append([
      this.controls.$el,
      this.tracks.$el
    ]);
  }

});