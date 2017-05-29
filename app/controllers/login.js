import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        loginController(creds) {
            this.send('loginRoute', creds);
        }
    }
});
