////////////////////////////////////////////////
// ChannelModel.js
////////////////////////////////////////////////

var app = app || {};

app.ChannelModel = Backbone.Model.extend({

  defaults: {
    number: '',
    color: '#ff3300'
  },

  initialize: function() {

  },

  addToChannel: function(sampleId) {
    this.sampleId = sampleId;
    this.trigger('addToChannel', this);
  }

});