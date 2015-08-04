////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

////////////////////////////////////////////////
// kick things off
////////////////////////////////////////////////

$(document).ready(function() {
  var samplesCollection = new app.SamplesCollection(samplesData);
  var appModel = new app.AppModel({samplesCollection: samplesCollection});

  new app.AppView({model: appModel});
});
////////////////////////////////////////////////
// ChannelsCollection.js
////////////////////////////////////////////////

var app = app || {};

var ChannelsCollection = Backbone.Collection.extend({
  
});
////////////////////////////////////////////////
// SamplesCollection.js
////////////////////////////////////////////////

var app = app || {};

app.SamplesCollection = Backbone.Collection.extend({
  
});
var samplesData = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
    title: 'One In A Million',
    length: '2470'
  }
];

////////////////////////////////////////////////
// AppModel.js
////////////////////////////////////////////////

var app = app || {};

app.AppModel = Backbone.Model.extend({

  initialize: function() {
    console.log(this);
  }

});
////////////////////////////////////////////////
// ChannelModel.js
////////////////////////////////////////////////

var app = app || {};

var ChannelModel = Backbone.Model.extend({
  
});
////////////////////////////////////////////////
// SampleModel.js
////////////////////////////////////////////////

var app = app || {};

var SampleModel = Backbone.Model.extend({
  
});
////////////////////////////////////////////////
// AppView.js
////////////////////////////////////////////////

var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#app',

  events: {
  },

  initialize: function() {
    this.channels = new app.ChannelsView();
    this.controls = new app.ControlsView();
    
    this.render();
  },

  render: function() {
    this.$el.append([
      this.controls.$el,
      this.channels.$el
    ]);
  }

});
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
  },

  render: function() {
    this.$el.html(this.template({
      name: 'nick'
    }));
    return this;
  }

});
////////////////////////////////////////////////
// ChannelsView.js
////////////////////////////////////////////////

var app = app || {};

app.ChannelsView = Backbone.View.extend({

  tagName: 'div',

  className: 'channels',

  events: {
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    // clear it out
    this.$el.children().detach();
    this.$el.html('');

    // add a track as default
    this.addChannel();

    // return this
    return this;
  },

  addChannel: function() {
    var track = new app.ChannelView();
    this.$el.append(track.$el);
  },

  removeTrack: function() {

  },

  removeAllTracks: function() {
    
  }

});
////////////////////////////////////////////////
// ControlsView.js
////////////////////////////////////////////////

var app = app || {};

app.ControlsView = Backbone.View.extend({

  tagName: 'div',

  className: 'controls',

  template: Handlebars.compile($('#controls-template').html()),

  events: {
    'click .controls__add-channel' : 'addChannel',
    'click .controls__remove-channel' : 'removeChannel',
    'click .controls__play' : 'playSong'
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
  },

  removeChannel: function(e) {
    e.preventDefault();
  },

  playSong: function(e) {
    e.preventDefault();
  }

});
