import Ember from 'ember';

export default Ember.Controller.extend({
    pages: [
        { route: 'list-data', name: 'List Data' },
        { route: 'login', name: 'Login' },
        { route: 'students', name: 'Students' }
    ]
});
