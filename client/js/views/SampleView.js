////////////////////////////////////////////////
// app.js
////////////////////////////////////////////////

var app = app || {};

app.SampleView = Backbone.View.extend({

  tagName: 'div',

  className: 'sample',

  template: Handlebars.compile($('#sample-template').html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});