////////////////////////////////////////////////
// ChannelsCollection.js
////////////////////////////////////////////////

var app = app || {};

app.ChannelsCollection = Backbone.Collection.extend({
  
  model: app.ChannelModel,

  initialize: function() {
  },

  addChannel: function() {
    this.add({});
  },

  removeChannel: function() {
    // if (this.length > 1) {
    //   var channel = this.pop();
    //   channel.removeChannel();
    // }
  }

});