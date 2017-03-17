import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  languages: [],
  tags: [],
  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});

Course.reopenClass({
  languageName(lang) {
    switch (lang) {
      case 'js':
        return 'JavaScript';
      default:
        return 'Unknown';
    }
  }
});

export default Course;