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

    this.model.on('addToChannel', function() {
      this.addTrack();
    }, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  addTrack: function() {
    var sampleModel = app.samplesCollection.get(this.model.sampleId);
    var track = new app.TrackView({model: sampleModel});
    this.$el.find('.channel__tracks').append(track.$el);
  }

});