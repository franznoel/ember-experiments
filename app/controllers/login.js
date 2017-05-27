import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login() {
            console.log('Login',this.get('email'),this.get('password'));
        }
    }
});
