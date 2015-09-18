////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

////////////////////////////////////////////////
// kick things off
////////////////////////////////////////////////

$(document).ready(function() {
  app.skunkPunk = {};
  app.timers = [];
  app.ticker;

  app.channelsCollection = new app.ChannelsCollection();
  app.samplesCollection = new app.SamplesCollection();

  new app.AppView();
});