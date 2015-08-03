////////////////////////////////////////////////
// AppView.js
////////////////////////////////////////////////

var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#app',

  events: {
  },

  initialize: function() {
    this.tracks = new app.TracksView();
    this.controls = new app.ControlsView();
    
    this.render();
  },

  render: function() {
    this.$el.append([
      this.controls.$el,
      this.tracks.$el
    ]);
  }

});
////////////////////////////////////////////////
// ControlsView.js
////////////////////////////////////////////////

var app = app || {};

app.ControlsView = Backbone.View.extend({

  tagName: 'div',

  className: 'tracks-controls',

  template: Handlebars.compile($('#track-controls-template').html()),

  events: {
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
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
  },

  render: function() {
    this.$el.html(this.template({
      name: 'nick'
    }));
    return this;
  }

});
////////////////////////////////////////////////
// TracksView.js
////////////////////////////////////////////////

var app = app || {};

app.TracksView = Backbone.View.extend({

  tagName: 'div',

  className: 'tracks',

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
    this.addTrack();

    // return this
    return this;
  },

  addTrack: function() {
    var track = new app.TrackView();
    this.$el.append(track.$el);
  },

  removeTrack: function() {

  },

  removeAllTracks: function() {
    
  }

});
////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

////////////////////////////////////////////////
// kick things off
////////////////////////////////////////////////

$(document).ready(function() {
  new app.AppView();
});