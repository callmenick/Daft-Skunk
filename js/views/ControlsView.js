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
    'click .controls__pause'          : 'stopSkunk'
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
      .html('<i class="fa fa-stop"></i> stop your skunk');

    _.each(app.skunkPunk, function(item, key) {
      var file = item.file;
      var delay = item.delay;
      app.timers.push(setTimeout(function() {file[0].play();}, delay));
    }.bind(this));

    this.moveTicker();
  },

  stopSkunk: function(e) {
    e.preventDefault();

    this.$el.find('.controls__pause')
      .removeClass('controls__pause')
      .addClass('controls__play')
      .html('<i class="fa fa-play"></i> play your skunk');

    _.each(app.timers, function(timer) {
      clearTimeout(timer);
    });

    _.each(app.skunkPunk, function(item, key) {
      var file = item.file;
      file[0].pause();
      file[0].currentTime = 0;
    }.bind(this));

    this.stopTicker();
  },

  moveTicker: function() {
    var ticker = this.$el.find('.controls__ticker--tick');

    app.ticker = setInterval(function() {
      var left = ticker[0].style.left;      
      left = parseFloat(left);
      ticker[0].style.left = left + 0.04166 + '%';
    }, 100);
  },

  stopTicker: function() {
    clearInterval(app.ticker);
    this.$el.find('.controls__ticker--tick')[0].style.left = 0;
  }

});