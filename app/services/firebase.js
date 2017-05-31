import Ember from 'ember';
import firebase from 'npm:firebase';

export default Ember.Service.extend({
    firebase: null,
    init() {
        firebase.initializeApp({
          apiKey: 'AIzaSyD_4kMXyAtD48K_afBrkd1-LTF73w3LLp8',
          authDomain: 'ember-experiments.firebaseapp.com',
          databaseURL: 'https://ember-experiments.firebaseio.com',
          storageBucket: 'ember-experiments.appspot.com',
          messagingSenderId: '6104397927'
        });
        this.firebase = firebase;
    }
});
