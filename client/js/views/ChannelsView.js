////////////////////////////////////////////////
// ChannelsView.js
////////////////////////////////////////////////

var app = app || {};

app.ChannelsView = Backbone.View.extend({

  tagName: 'div',

  className: 'channels',

  initialize: function() {
    this.listenTo(app.channelsCollection, 'add', this.renderChannel);
    this.addChannel();
    this.addChannel();
  },

  addChannel: function() {
    app.channelsCollection.addChannel();
  },

  renderChannel: function() {
    var channel = new app.ChannelView({model: app.channelsCollection.last()});
    this.$el.append(channel.$el);
  }

});