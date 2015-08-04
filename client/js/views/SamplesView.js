////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

app.SamplesView = Backbone.View.extend({

  tagName: 'div',

  className: 'samples',

  template: Handlebars.compile($('#samples-template').html()),

  initialize: function() {
    // initial render
    this.render();

    // populate samples library once collection is fetched
    app.samplesCollection.fetch();
    this.listenTo(app.samplesCollection, 'sort', this.populateSamplesLibrary);
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  populateSamplesLibrary: function() {
    app.samplesCollection.forEach(function(model) {
      var sampleView = new app.SampleView({model: model});
      this.$el.find('.sample__tracks').append(sampleView.$el);
    }, this);
  }

});