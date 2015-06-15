import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  author: DS.belongsTo('author'),
  date: attr('date'),
  body: attr('string')
});
