import Ember from 'ember';
import firebase from 'npm:firebase';

export default Ember.Service.extend({
    firebase: null,
    init() {
        firebase.initializeApp({
          apiKey: 'AIzaSyD_4kMXyAtD48K_afBrkd1-LTF73w3LLp8',
          authDomain: 'ember-experiments-ff56b.firebaseapp.com',
          databaseURL: 'https://ember-experiments-ff56b.firebaseio.com',
          storageBucket: 'ember-experiments-ff56b.appspot.com',
          messagingSenderId: '6104397927'
        });
        this.firebase = firebase;
    }
});
