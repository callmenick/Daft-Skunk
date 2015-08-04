////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

app.SampleView = Backbone.View.extend({

  tagName: 'div',

  className: 'sample',

  template: Handlebars.compile($('#sample-template').html()),

  events: {
    'click .sample__preview'         : 'previewSample',
    'change .sample__select-channel' : 'addSampleToChannel'
  },

  initialize: function() {
    this.render();

    // handle events
    this.$el.find('.sample__audio')[0].addEventListener('ended', function() {
      this.stopSample();
    }.bind(this));
  },

  render: function() {
    this.model.attributes.timeSeconds = (this.model.attributes.time/1000).toFixed(2);
    this.$el.html(this.template(this.model.attributes));

    this.renderChannelSelections();

    return this;
  },

  renderChannelSelections: function() {
    app.channelsCollection.forEach(function(model) {
      this.$el.find('.sample__select-channel')
        .append($('<option value="' + model.cid + '">')
        .html('Add to channel ' + model.get('number')));
    }, this);
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
  },

  addSampleToChannel: function(e) {
    var channelId = e.target.value;

    if (channelId) {
      var channelModel = app.channelsCollection.get(channelId);
      channelModel.addToChannel(this.model.cid);
    }
  }

});