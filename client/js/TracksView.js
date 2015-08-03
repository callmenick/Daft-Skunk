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