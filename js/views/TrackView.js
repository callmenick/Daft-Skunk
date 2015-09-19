////////////////////////////////////////////////
// TrackView.js
////////////////////////////////////////////////

var app = app || {};

app.TrackView = Backbone.View.extend({

  tagName: 'div',

  className: 'track',

  template: Handlebars.compile($('#track-template').html()),

  events: {
    'click .track__remove' : 'removeFromSkunk'
  },

  initialize: function() {
    this.render();

    this.$el.on('dragMove', function(event, pointer, moveVector) {
      this.updateSkunk();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));

    this.$el.css({
      width: (this.model.get('timeSeconds') / 240) * 100 + '%'
    });

    this.$el.draggabilly({
      axis: 'x',
      containment: this.$el.parent(),
      grid: [4, 4]
    });

    this.addToSkunk();

    return this;
  },

  addToSkunk: function() {
    app.skunkPunk[this.cid] = {
      file: this.$el.find('.track__audio'),
      delay: 0,
      x: this.$el.data('draggabilly').position.x
    };
  },

  removeFromSkunk: function() {
    var id = this.cid;
    delete app.skunkPunk[id];

    this.undelegateEvents();
    this.$el.removeData().unbind(); 
    this.remove();  
    Backbone.View.prototype.remove.call(this);
  },

  updateSkunk: function() {
    var delay = this.$el.data('draggabilly').position.x / 960;

    app.skunkPunk[this.cid].delay = delay*240*1000;
  },

  delayEnableDragabillity: function() {
    setTimeout(function() {
      this.$el.draggabilly('enable');
    }.bind(this), 1000);
  }

});