import Ember from 'ember';
import firebase from 'npm:firebase';

export default Ember.Route.extend({
    statusMessage: null,
    loggedIn: false,

    init() {
        // Check if somebody is logged in.
        console.log('Demo');
    },

    authenticate(creds) {
        var self = this;
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
            .then(function(response) {
                // console.log(response);
                self.loggedIn = true;
                self.transitionTo('login.content');
            })
            .catch(function(error) {
                console.log(error.message);
            });

        this.loggedIn = self.loggedIn;
    },

    actions: {
        loginApplication(creds) {
            this.authenticate(creds);
        }
    }
});
