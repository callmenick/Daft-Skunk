////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

app.SampleView = Backbone.View.extend({

  tagName: 'div',

  className: 'sample',

  template: Handlebars.compile($('#sample-template').html()),

  events: {
    'click .sample__preview' : 'previewSample',
  },

  initialize: function() {
    this.render();

    this.$el.find('.sample__audio')[0].addEventListener('ended', function() {
      this.stopSample();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  previewSample: function() {
    if (this.$el.find('.sample__preview').hasClass('fa-play')) {
      this.playSample();
    } else {
      this.stopSample();
    }
  },

  playSample: function() {
    this.$el.find('.sample__preview').removeClass('fa-play').addClass('fa-pause');
    this.$el.find('.sample__audio')[0].play();
  },

  stopSample: function() {
    this.$el.find('.sample__preview').removeClass('fa-pause').addClass('fa-play');
    this.$el.find('.sample__audio')[0].pause();
    this.$el.find('.sample__audio')[0].currentTime = 0;
  }

});