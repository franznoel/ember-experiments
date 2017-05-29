import Ember from 'ember';
import firebase from 'npm:firebase';

export default Ember.Route.extend({
    statusMessage: null,

    authenticate(creds) {
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error.message);
            });
    },

    actions: {
        loginRoute(creds) {
            this.authenticate(creds);
        }
    }
});
