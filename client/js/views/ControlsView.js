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

  playSong: function(e) {
    e.preventDefault();

    for (var key in app.skunkPunk) {
      var item = app.skunkPunk[key];
      var file = item.file;
      var delay = item.delay;
      this.playTrack(file, delay);
    }
  },

  playTrack: function(file, delay) {
    console.log(file);
    setTimeout(function() {
      file[0].play();
    }, delay);
  }

});