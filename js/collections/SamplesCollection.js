////////////////////////////////////////////////
// SamplesCollection.js
////////////////////////////////////////////////

var app = app || {};

app.SamplesCollection = Backbone.Collection.extend({

  model: app.SampleModel,

  url: 'data/samples.json',

  initialize: function() {  
  }

});