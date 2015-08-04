////////////////////////////////////////////////
// AppView.js
////////////////////////////////////////////////

var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#app',

  events: {
  },

  initialize: function() {
    this.channels = new app.ChannelsView();
    this.controls = new app.ControlsView();
    this.samples = new app.SamplesView();
    
    this.render();
  },

  render: function() {
    this.$el.append([
      this.controls.$el,
      this.channels.$el,
      this.samples.$el
    ]);
  }

});