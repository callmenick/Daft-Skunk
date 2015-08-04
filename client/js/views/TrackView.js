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

    this.$el.on('dragMove', function() {
      this.updateSkunk();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));

    this.$el.css({
      position: 'absolute',
      width: (this.model.get('timeSeconds') / 240) * 100 + '%'
    });

    this.$el.draggabilly({
      axis: 'x',
      containment: this.$el.parent()
    });

    this.addToSkunk();

    return this;
  },

  addToSkunk: function() {
    app.skunkPunk[this.cid] = {
      file: this.$el.find('.track__audio'),
      delay: 0
    };
  },

  updateSkunk: function() {
    var delay = this.$el.data('draggabilly').position.x / 1140;

    app.skunkPunk[this.cid].delay = delay*240*1000;
  }

});