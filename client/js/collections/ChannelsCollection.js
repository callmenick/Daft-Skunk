////////////////////////////////////////////////
// ChannelsCollection.js
////////////////////////////////////////////////

var app = app || {};

app.ChannelsCollection = Backbone.Collection.extend({
  
  model: app.ChannelModel,

  initialize: function() {
  },

  addChannel: function() {
    this.add({
      number: app.channelsCollection.length + 1
    });
  }

});