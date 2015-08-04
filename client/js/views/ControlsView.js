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
    'click .controls__play'           : 'playSkunk',
    'click .controls__pause'          : 'pauseSkunk'
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

  playSkunk: function(e) {
    e.preventDefault();

    this.$el.find('.controls__play')
      .removeClass('controls__play')
      .addClass('controls__pause')
      .html('<i class="fa fa-pause"></i> pause your skunk');

    for (var key in app.skunkPunk) {
      var item = app.skunkPunk[key];
      var file = item.file;
      var delay = item.delay;
      this.playTrack(file, delay);
    }

    this.moveTicker();
  },

  playTrack: function(file, delay) {
    setTimeout(function() {
      file[0].play();
    }, delay);
  },

  pauseSkunk: function(e) {
    e.preventDefault();

    this.$el.find('.controls__pause')
      .removeClass('controls__pause')
      .addClass('controls__play')
      .html('<i class="fa fa-play"></i> play your skunk');
  },

  moveTicker: function() {
    var ticker = this.$el.find('.controls__ticker--tick');
    setInterval(function() {
      var left = ticker[0].style.left;      
      left = parseFloat(left);
      ticker[0].style.left = left + 0.04166 + '%';
    }, 100);
  }

});