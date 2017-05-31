import Ember from 'ember';
import firebase from 'npm:firebase';

export default Ember.Route.extend({
    statusMessage: null,
    loggedIn: false,
    user: null,

    init() {
        // Get the current user
        // this.setCurrentUser();
    },

    setCurrentUser() {
        var self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                self.user = user;
                console.log('User: ', user);
            } else {
                console.log('No user signed in.');
                self.transitionTo('login');
            }
        });

        this.user = self.user;
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
