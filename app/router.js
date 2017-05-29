import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list-data');
  this.route('login', function() {
    this.route('content');
  });
  this.route('students');
});

export default Router;
